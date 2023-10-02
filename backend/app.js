const express = require("express");
const ErrorHandler = require("./utils/ErrorHandler");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

// import routes
const user = require("./controller/user");

app.use(express.json());
app.use(cookieParser());
app.use(express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true }));

// configuration
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}

// Router api's
app.use("/api/v2/user", user);

app.use(ErrorHandler);
app.use(cookieParser);

module.exports = app;
