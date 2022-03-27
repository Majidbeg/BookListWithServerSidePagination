const express = require("express");
const healthRouter = require("./healthcheck");
const books = require("../services/fetchEmailId.js");
const app = express();

//health route to check deployment status
app.use('/health', healthRouter);
app.use('/books', books);

module.exports = app;