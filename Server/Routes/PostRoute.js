import express from "express";
import { createPost, deletePost, getpost, getTimelinePosts, likePost, updatePost } from "../Controllers/PostController.js";
const router= express.Router()

router.post('/', createPost)
router.get('/:id',getpost)
router.put('/:id',updatePost)
router.delete('/:id',deletePost)
router.put('/:id/like',likePost)
router.get('/:id/timeline',getTimelinePosts)
export default router; 