const express = require("express");
const cors = require("cors");

require("dotenv").config();

// const usersRouter = require("./routes/users");
// const newsRouter = require("./routes/news");
// const friendsRouter = require("./routes/friends");
const authRouter = require("./routes/auth");
const movieRoute = require("./routes/movie");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/auth", authRouter);
app.use("/movie", movieRoute);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
