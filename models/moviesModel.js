const Joi = require("joi");
const { Schema, model } = require("mongoose");

const newSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },

    director: {
      type: String,
      default: "No director",
    },
    date: {
      type: Date,
      default: "00-00-0000",
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Movie = model("movie", newSchema);

const movieSchemaValidation = Joi.object({
  title: Joi.string().min(2).max(16).required(),
  director: Joi.string().empty(""),
  date: Joi.date().empty(""),
});

module.exports = { Movie, movieSchemaValidation };
