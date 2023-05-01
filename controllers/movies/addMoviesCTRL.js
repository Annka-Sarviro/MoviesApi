const { ObjectId } = require("mongodb");
const { Movie } = require("../../models/moviesModel");

const addMoviesCTRL = async (req, res) => {
  const data = req.body;
  const { _id } = req.user;
  const newId = new ObjectId(_id);

  if (!data) {
    return res.status(400).json({ message: "please add data" });
  }
  console.log({ ...data, owner: newId });
  const newData = await Movie.create({ ...data, owner: newId });
  console.log(newData);
  return res.status(201).json({ newData });
};

module.exports = addMoviesCTRL;
