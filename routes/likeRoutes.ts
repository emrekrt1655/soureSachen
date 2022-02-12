import express from "express";
import likeCtrl from "../controllers/likeCtrl";
const router: any = express.Router();


router.get("/getPostLikes", likeCtrl.getPostLikes)
router.get("/getCommentLikes", likeCtrl.getCommentLikes)
router.post("/like", likeCtrl.like)
router.delete("/unlike/:likeId", likeCtrl.unlike)


export default router