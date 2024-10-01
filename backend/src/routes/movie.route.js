import express from "express";
import { getMovieTrailers, movies } from "../controllers/movies.controller.js";
const router = express.Router()

router.get("/allmovie", movies);
router.get("/trailers",getMovieTrailers);

export default router;