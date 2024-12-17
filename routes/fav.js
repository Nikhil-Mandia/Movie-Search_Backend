import { addFavourite, getFavourites } from "../controllers/fav.js";

import express from "express"

const router = express.Router();

router.get("/", getFavourites);
router.post("/", addFavourite);

export default router;
