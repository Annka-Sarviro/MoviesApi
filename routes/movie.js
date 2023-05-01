const express = require("express");
const { movies: ctrl } = require("../controllers");
const { asyncWrapper } = require("../helpers");
const { validation, authenticate } = require("../middleware");
const { movieSchemaValidation } = require("../models/moviesModel");

const router = express.Router();

// router.get("/", asyncWrapper(ctrl.getMovies));
router.get("/:id", authenticate, asyncWrapper(ctrl.getMoviesById));
router.post("/", authenticate, validation(movieSchemaValidation), asyncWrapper(ctrl.addMovie));
// router.delete("/:id", authenticate, asyncWrapper(ctrl.deleteNotice));

module.exports = router;
