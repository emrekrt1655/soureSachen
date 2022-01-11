import { PrismaClient, Prisma } from "@prisma/client";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { IUser, IDecodedToken } from "../utils/types";
import {
  genActiveToken,
  genAccessToken,
  genRefreshToken,
} from "../config/genToken";

const prisma = new PrismaClient();

const tokenEnv = {
  active: process.env.ACTIVE_TOKEN_SECRET,
  refresh: process.env.REFRESH_TOKEN_SECRET,
  access: process.env.ACCESS_TOKEN_SECRET,
};

const authCtrl = {
  // register handler don't save to the database,
  //  it creates only a user data to generate a activation token

  register: async (req: Request, res: Response) => {
    const existingUser = await prisma.user.findUnique({
      where: { email: req.body.email },
    });
    if (existingUser)
      return res.status(400).json({ message: "This user already exists" });

    const password = await bcrypt.hash(req.body.password, 12);

    const { id, userName, email } = req.body;

    try {
      const user: IUser = {
        id: id,
        userName: userName,
        email: email,
        password: password,
      };

      //it generates a token for five minutes to activate account
      const activeToken = genActiveToken({ user });
      res.json({
        status: "OK",
        msg: "Please active your account",
        data: user,
        activeToken,
      });
    } catch (error: any) {
      res.status(500).json(error.message);
    }
  },

  //it saves the user to the database with token

  activeAccount: async (req: Request, res: Response) => {
    try {
      const { active_token } = req.body;
      const decoded = <IDecodedToken>(
        jwt.verify(active_token, `${tokenEnv.active}`)
      );
      const { user } = decoded;

      if (!user) return res.status(400).json({ msg: "Invalid token" });

      await prisma.user.create({
        data: {
          id: user.id,
          userName: user.userName,
          email: user.email,
          password: user.password,
        },
      });
      res.status(200).json({ message: "Account has been activated" });
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  },

  login: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const user = await prisma.user.findUnique({ where: { email: email } });
      if (!user)
        return res.status(400).json({ msg: "This account does not exists" });

      // if the user exists

      loginUser(user, password, res);
    } catch (error: any) {
      return res.status(500).json({ msg: error.message });
    }
  },
  logout: async (req: Request, res: Response) => {
    try {
      res.clearCookie("refreshtoken", { path: "/api/refresh_token" });
      return res.status(200).json({ message: "Logged Out!" });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  },

  refreshToken: async (req: Request, res: Response) => {
    try {
      const rf_token = req.cookies.refreshToken;
      if (!rf_token)
        return res.status(400).json({ mesage: "Please Login now!" });
      const decoded = <IDecodedToken>(
        jwt.verify(rf_token, `${tokenEnv.refresh}`)
      );
      if (!decoded.tokenId)
        return res.status(400).json({ mesage: "Please Login now!" });

      const user = await prisma.user.findUnique({
        where: { id: decoded.tokenId },
        //TODO
        //select: {password: false}
      });
      if (!user)
        return res.status(404).json({ mesage: "This account does not exist." });

      const access_token = genAccessToken({ id: user.id });

      res.json({ access_token });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  },
  getUsers: async (req: Request, res: Response) => {
    try {
      const { token }: any = req.headers;
      const decoded = <IDecodedToken>jwt.verify(token, `${tokenEnv?.access}`);
      const { tokenId } = decoded;
      if (!tokenId) return res.status(400).json({ message: "Invalid Token" });
      const users: IUser[] = await prisma.user.findMany();
      return res.json({
        status: "success",
        message: "All users found",
        data: users,
      });
    } catch (error: any) {
      res.status(500).json({ message: error.messege });
    }
  },
  updateUser: async (req: Request, res: Response) => {
    try {
      const { token }: any = req.headers;
      const decoded = <IDecodedToken>jwt.verify(token, `${tokenEnv?.access}`);
      const { tokenId, user } = decoded;
      if (!tokenId) return res.status(400).json({ message: "Invalid Token" });
      if (user?.id !== req.params.id)
        return res
          .status(400)
          .json({ message: "You are not authorized to update this" });
      const { id, userName, email, password } = <IUser>req.body;
      const hashedPassword = await bcrypt.hash(password, 12);
      const updatedUser: IUser = await prisma.user.update({
        where: { id: req.params.id },
        data: <IUser>{
          id,
          userName,
          email,
          password: hashedPassword,
        },
      });
      res.status(200).json({
        status: "OK",
        message: "User updated successfully",
        data: <IUser>updatedUser,
      });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },
  deleteUser: async (req: Request, res: Response) => {
    try {
      const { token }: any = req.headers;
      const decoded = <IDecodedToken>jwt.verify(token, `${tokenEnv?.access}`);

      const { tokenId, user } = decoded;
      if (!tokenId) return res.status(400).json({ message: "Invalid Token" });

      if (user?.id !== req.params.id)
        return res
          .status(400)
          .json({ message: "You are not authorized to delete this" });
      const deletedUser = await prisma.user.delete({
        where: { id: req.params.id },
      });

      return res
        .status(200)
        .send({ message: `${deletedUser.id} deleted successfully` });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },
};

const loginUser = async (user: IUser, password: string, res: Response) => {
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return res.status(400).json({ message: "Password is incorrect" });

  //after login creates a access token
  const access_token = genAccessToken({ id: user.id });
  // it creates a new access token
  const refresh_token = genRefreshToken({ id: user.id });

  res.cookie("refreshtoken", refresh_token, {
    httpOnly: true,
    path: "/api/refresh_token",
    maxAge: 30 * 24 * 60 * 1000, //30 days
  });

  res.json({
    message: "Login successfully completed!",
    access_token,
    user: { ...user, password: "" },
  });
};

export default authCtrl;
