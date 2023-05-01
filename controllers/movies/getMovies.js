const { Movie } = require("../../models/moviesModel");

const getMoviesCTRL = async (req, res) => {
  // const { _id: owner } = req.user;
  const { page = 1, perPage = 15 } = req.query;

  const skip = (+page - 1) * +perPage;

  const movies = await Movie.find({}, "", {
    skip,
    limit: perPage,
  });

  res.json({
    status: "success",
    code: "200",
    data: { movies },
  });
};

module.exports = getMoviesCTRL;
