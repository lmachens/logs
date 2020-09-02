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
    const { level } = request.query;
    let query = null;
    if (!level) {
      query = {};
    } else if (typeof level === "string") {
      query = {
        level: level,
      };
    } else if (Array.isArray(level)) {
      query = {
        level: { $in: level },
      };
    }

    const logs = await getCollection("logs").find(query).toArray();
    response.json(logs);
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal server error");
  }
});

module.exports = logsRouter;
