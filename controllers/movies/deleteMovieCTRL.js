const createError = require("http-errors");
const { Movie } = require("../../models/moviesModel");

const deleteMovie = async (req, res) => {
  const { id: movieId } = req.params;
  const { _id: owner } = req.user;

  if (!movieId) {
    throw createError(404, "please add id");
  }

  const data = await Movie.findOneAndDelete({ _id: movieId, owner });

  if (!data) {
    return res.status(404).json({ message: "User's movies with such id not found" });
  }

  return res.status(200).json({ message: "successful", data });
};

module.exports = deleteMovie;
