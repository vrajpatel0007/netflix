import express from "express";
import { searchPerson ,searchMovie ,searchTv } from "../controllers/serch.controller.js";
const router = express.Router()

router.get("/person", searchPerson);
router.get("/movie", searchMovie);
router.get("/tv", searchTv);

export default router;