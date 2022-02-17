import express from "express";
import likeCtrl from "../controllers/likeCtrl";
const router: any = express.Router();


router.get("/getPostLikes/:postId", likeCtrl.getPostLikes)
router.get("/getCommentLikes/:commentId", likeCtrl.getCommentLikes)
router.post("/like", likeCtrl.like)
router.post("/likeComment", likeCtrl.likeComment)
router.delete("/unlike/:likeId", likeCtrl.unlike)


export default router