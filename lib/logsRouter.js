const express = require("express");
const { getCollection } = require("./db");

const logsRouter = express.Router();

logsRouter.post("/", async (request, response) => {
  try {
    const log = request.body;
    await getCollection("logs").insertOne(log);
    response.json("😁");
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal server error");
  }
});

logsRouter.get("/", async (request, response) => {
  try {
    const logs = await getCollection("logs").find({}).toArray();
    response.json(logs);
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal server error");
  }
});

module.exports = logsRouter;
