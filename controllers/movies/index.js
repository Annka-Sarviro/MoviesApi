const addMovie = require("./addMoviesCTRL");
const deleteMovieById = require("./deleteMovieCTRL");
const getMoviesById = require("./getMoviesByIdCTRL");
const getMovies = require("./getMovies");
const updateMovie = require("./updateMovieCTRL");

module.exports = { getMovies, getMoviesById, addMovie, deleteMovieById, updateMovie };
