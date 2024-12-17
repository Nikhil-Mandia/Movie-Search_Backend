import { DB } from "../models/index.js";
export const getFavourites = async (req, res,next) => {
  try {
    const favourites = await DB.Favourite.findAll();
    return res.status(201).json({
      message: "Favourite Movie!",
      data: favourites,
    });
  } catch (error) {
    next()
    res.status(500).send("Error fetching favourites");
  }
};

export const addFavourite = async (req, res,next ) => {
  try {
    const { title, year, type, poster } = req.body;

    if (!title && !year && !type && !poster) {
      return res.status(400).json({ message: "Movie data is required." });
    }

    const favouriteRecord = await DB.Favourite.create({
      title: title,
      year: year,
      type: type,
      poster: poster,
    });

    return res.status(201).json({
      message: "Movie data saved to Favourite!",
      data: favouriteRecord,
    });
  } catch (error) {
    next()
    console.error("Error saving to Favourite:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};
