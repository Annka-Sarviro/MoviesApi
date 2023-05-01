const bcrypt = require("bcryptjs");
const { SECRET_KEY } = process.env;
const { User } = require("../../models/userModel");
const createError = require("http-errors");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { password, email, name } = await req.body;
  console.log("req");
  const user = await User.findOne({ email });
  if (user) {
    throw createError(409, "Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    name,
    email,
    password: hashPassword,
  });

  const payload = {
    id: newUser._id,
  };
  const token = jwt.sign(
    payload,
    SECRET_KEY
    // { expiresIn: "12h" }
  );
  await User.findByIdAndUpdate(newUser._id, { token });

  res.status(201).json({
    message: "success",
    token,
    data: { result: { _id: newUser._id } },
  });
};

module.exports = register;
