const { Movie } = require("../../models/moviesModel");

const addMoviesCTRL = async (req, res) => {
  const data = req.body;
  const { _id: owner } = req.user;

  if (!data) {
    return res.status(400).json({ message: "please add data" });
  }

  const newData = await Movie.create({ ...data, owner });

  return res.status(201).json({ newData });
};

module.exports = addMoviesCTRL;
