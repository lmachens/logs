const express = require("express");

const logsRouter = express.Router();

logsRouter.post("/", (request, response) => {
  response.send("😁");
});

module.exports = logsRouter;
