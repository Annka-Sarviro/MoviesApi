const { Movie } = require("../../models/moviesModel");

const updateMoviesCTRL = async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  const { _id: owner } = req.user;

  if (!data) {
    return res.status(400).json({ message: "please add data" });
  }

  const newData = await Movie.findOneAndUpdate({ _id: id, owner }, data, { new: true });

  if (!data) {
    return res.status(404).json({ message: "User's movies with such id not found" });
  }

  return res.status(200).json({ data: newData });
};

module.exports = updateMoviesCTRL;
