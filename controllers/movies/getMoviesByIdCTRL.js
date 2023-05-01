const createError = require("http-errors");

const { Movie } = require("../../models/moviesModel");

const getMoviesByIdCTRL = async (req, res) => {
  const { id } = req.params;
  const { _id: owner } = req.user;

  if (!id) {
    throw createError(404, { message: "please add id" });
  }

  const movie = await Movie.findById({ _id: id, owner });

  if (!movie) {
    throw createError(404, { message: "movies with such id not found" });
  }

  return res.status(200).json({ movie });
};

module.exports = getMoviesByIdCTRL;
