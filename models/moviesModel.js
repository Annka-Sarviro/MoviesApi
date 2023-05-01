const Joi = require("joi").extend(require("@joi/date"));
const { Schema, model } = require("mongoose");
const { handleError } = require("../helpers");

const newSchema = Schema(
  {
    title: {
      type: String,
      required: [true, "Enter title for movie"],
    },

    director: {
      type: String,
      default: "No director",
    },
    date: {
      type: String,
      default: "01-01-1900",
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const movieSchemaValidation = Joi.object({
  title: Joi.string().min(2).max(16).required(),
  director: Joi.string().empty(""),
  date: Joi.date().format("DD-MM-YYYY").max("now").empty(""),
});

newSchema.post("save", handleError);

const Movie = model("movie", newSchema);

module.exports = { Movie, movieSchemaValidation };
