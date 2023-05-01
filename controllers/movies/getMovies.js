const { Movie } = require("../../models/moviesModel");

const getMoviesCTRL = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, perPage = 15, ...query } = req.query;
  const skip = (+page - 1) * +perPage;

  const movies = await Movie.find({ owner, ...query }, "", {
    skip,
    limit: perPage,
  })
    .sort({ title: 1 })
    .populate("owner", "_id email createdAt");

  if (!movies) {
    return res.status(404).json({ message: "User's movies with such id not found" });
  }

  res.json({
    status: "success",
    code: "200",
    data: { movies },
  });
};

module.exports = getMoviesCTRL;
