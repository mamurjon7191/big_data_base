const express = require("express");

const tumanRouter = require("../routes/tumanRouter");
const maktabRouter = require("../routes/maktabRouter");
const sinfRouter = require("../routes/sinfRouter");
const oquvchiRouter = require("../routes/oquvchilarController");

const app = express();
app.use(express.json());
app.use("/api/v1/tuman", tumanRouter);
app.use("/api/v1/maktab", maktabRouter);
app.use("/api/v1/sinf", sinfRouter);
app.use("/api/v1/oquvchi", oquvchiRouter);

module.exports = app;
