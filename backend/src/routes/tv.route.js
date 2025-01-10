import express from "express";
import { getTrendingTv, getTvDetails, getTvTrailers } from "../controllers/tv.controller.js";

const router = express.Router()

router.get("/trending", getTrendingTv);
router.get("/trailers", getTvTrailers);
router.get("/details", getTvDetails);
export default router;