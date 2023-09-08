const express = require("express");
const router = require("./src/routes/api");
const app = express();
const bodyParser = require("body-parser");
// Security Middleware
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const cors = require("cors");
// Security Middleware implementation
app.use(cors());
app.use(helmet());
require("dotenv").config();
app.use(mongoSanitize());
app.use(hpp());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(bodyParser.json());
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);
// Database Connection
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  })
  .then(() => {
    console.log("Connected to the database.");
  })
  .catch((error) => {
    console.error("Connection error:", error);
  });

app.use("/api/v1", router);
app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "Not Found" });
});
module.exports = app;
