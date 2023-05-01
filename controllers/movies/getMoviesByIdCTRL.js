const { RequestError } = require("../../helpers");
const { ObjectId } = require("mongodb");

const { Movie } = require("../../models/moviesModel");

const getMoviesByIdCTRL = async (req, res) => {
  const { id } = req.params;
  const { _id: owner } = req.user;
  const newId = new ObjectId(id);

  if (!id) {
    throw RequestError(404, { message: "please add id" });
  }
  console.log(newId, "id");
  console.log("oner", owner);
  const movie = await Movie.findById({ _id: id, owner });

  if (!movie) {
    return res.status(404).json({ message: "movies with such id not found" });
  }

  return res.status(200).json({ movie });
};

module.exports = getMoviesByIdCTRL;
