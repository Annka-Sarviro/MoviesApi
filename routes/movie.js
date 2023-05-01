const express = require("express");
const { movies: ctrl } = require("../controllers");
const { asyncWrapper } = require("../helpers");
const { validation, authenticate, upload } = require("../middleware");
const { noticeSchemaValidation } = require("../models/moviesModel");

const router = express.Router();

router.get("/", asyncWrapper(ctrl.getMovies));
console.log("get");
// router.get("/:id", asyncWrapper(ctrl.getNoticeByIdCTRL));
// router.post("/", authenticate, upload.single("avatar"), validation(noticeSchemaValidation), asyncWrapper(ctrl.addNotice));
// router.delete("/:id", authenticate, asyncWrapper(ctrl.deleteNotice));

module.exports = router;
