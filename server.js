import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { errorHandler } from "./utils/error-handler.js";
import { connection } from "./db/connection.js";
import FavMovieRoutes from "./routes/fav.js";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/movie", FavMovieRoutes);

app.get("/test", (req, res, next) => {
  try {
    return next();
  } catch (error) {
    console.log(error);
  }
});

app.use(errorHandler);

app.all("*", (req, res) => {
  res.status(404).json({ message: "Sorry! Page not found" });
});

connection.connect((err) => {
  if (err) {
    console.error("Database connection error:", err);
    process.exit(1);
  }
  console.log("Database connected successfully");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
