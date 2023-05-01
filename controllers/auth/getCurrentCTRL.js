const createError = require("http-errors");

const getCurrent = async (req, res) => {
  const { email } = req.user;

  if (!email) {
    throw createError(401, "user not auth");
  }

  res.json({
    email,
  });
};

module.exports = getCurrent;
