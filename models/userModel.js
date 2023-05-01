const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleError } = require("../helpers");

const passwordMessage = "Passwords no contain space, min length 7 characters, max 32.";
const emailRegex = /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/;
// const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,24}/;

const userSchema = new Schema(
  {
    password: {
      type: String,
      // match: passwordRegex,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      match: emailRegex,
      required: [true, "Email is required"],
      unique: true,
    },
    name: {
      type: String,
      default: "NewUser",
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleError);

const registerJoiSchema = Joi.object({
  password: Joi.string()
    .trim()
    // .regex(passwordRegex)
    .required()
    .messages({
      "string.empty": `password must contain value`,
      "string.pattern.base": `${passwordMessage}`,
    }),
  email: Joi.string().trim().email().regex(emailRegex).required().messages({
    "string.base": `email should be a type of string`,
    "string.empty": `email must contain value`,
  }),
  name: Joi.string().empty(""),
  token: Joi.string(),
});

const loginJoiSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().email().required(),
});

const schemasUser = { registerJoiSchema, loginJoiSchema };

const User = model("user", userSchema);

module.exports = { User, schemasUser };
