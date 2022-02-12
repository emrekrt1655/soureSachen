import express from "express";
import followerCtrl from "../controllers/followerCtrl";
const router: any = express.Router();

router.get("/follower/:followedId", followerCtrl.getFollowers)
router.get("/follower/:followerId", followerCtrl.getFollowings)
router.post("/follow", followerCtrl.follow)
router.post("/followed", followerCtrl.followed)
router.unfollow("/unfollow/:followingId", followerCtrl.unfollow)


export default router 