import express from "express";
import cookieParser from "cookie-parser";
import path from "path";

import authRoutes from "./src/routes/auth.route.js";
import { ENV_VARS } from "./src/config/envVars.js";
import { connectDB } from "./src/config/db.js";
import movieRoutes from "./src/routes/movie.route.js"
import searchRoutes from "./src/routes/search.route.js"
import tvRoutes from "./src/routes/tv.route.js"
const app = express();
const PORT = ENV_VARS.PORT
const __dirname = path.resolve();
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/movie", movieRoutes);
app.use("/api/v1/search", searchRoutes );
app.use("/api/v1/tv", tvRoutes );

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
    connectDB()
})