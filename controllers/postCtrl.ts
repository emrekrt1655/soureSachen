import { PrismaClient, Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { IPost, IDecodedToken } from "../utils/types";
import jwt from "jsonwebtoken";



const tokenEnv = {
  access: process.env.ACCESS_TOKEN_SECRET,
};

const prisma = new PrismaClient();

const postCtrl = {
  getPosts: async (req: Request, res: Response) => {
    try {
      const posts: IPost[] = await prisma.post.findMany();
      return res.status(200).json({
        status: "success",
        message: "All posts found",
        data: posts,
      });
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  },

  getPostsbyUserId: async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;
      const posts: IPost[] = await prisma.post.findMany({
        where: { postUserId: userId },
      });
      return res.status(200).json({
        status: "success",
        message: "All posts found",
        data: posts,
      });
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  },

  create: async (req: Request, res: Response) => {
    try {
      const { text, topic, userId } = req.body;
      prisma.post.create({
        data: {
          postId: `${text.slice(0, 20) + new Date()}`,
          text: text,
          postUserId: userId,
          topic: topic,
          postTopicId: `${new Date() + topic}`,
        },
      });
      res.status(200).json({ message: "Post has been created" });
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const { postId } = req.params;
      const post = await prisma.post.findUnique({
        where: { postId: postId },
      });
      const { token }: any = req.headers;
      const decoded = <IDecodedToken>jwt.verify(token, `${tokenEnv?.access}`);
      const { id } = decoded;
      if (!id) return res.status(400).json({ message: "Invalid Token" });
      if (id !== post!.postUserId)
        return res
          .status(400)
          .json({ message: "You are not authorized to delete this" });
      const deletedPost = await prisma.post.delete({
        where: { postId: req.params.postId },
      });
      return res
        .status(200)
        .send({ message: `${deletedPost.postId} deleted successfully` });
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  },
};

export default postCtrl;
