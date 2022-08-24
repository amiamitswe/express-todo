/*
 * Title: toto app
 * Description:toto app using express and mongoose
 * Author: Amit Samadder (Abir)
 * Date: 24/08/2022
 * Time: 21:08:53
 *
 */

// dependencies
const express = require("express");
const mongoose = require("mongoose");
const todoHandler = require("./routerHandler/todoHandler");

// app port
const port = 3000;

// app initialization
const app = express();
app.use(express.json());

// database connection with mongoose
mongoose
  // mongodb connection string
  .connect("mongodb://localhost/todos", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connection successful"))
  .catch((err) => console.log(err));

// app handler
app.use("/todo", todoHandler);

// default error handler
const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
};

// listen app
app.listen(port, () => {
  console.log(`App running on port no ${port}`);
});