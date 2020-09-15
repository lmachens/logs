const express = require("express");
const jwt = require("jsonwebtoken");
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
    const { authToken } = request.cookies;

    if (!authToken) {
      return response.status(401).end("Unauthorized");
    }

    const { email } = jwt.verify(authToken, process.env.JWT_SECRET);
    const account = await getCollection("accounts").findOne({ email });
    if (!account) {
      return response.status(401).end("Unauthorized");
    }

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
