const express = require("express");
const jwt = require("jsonwebtoken");

const { getCollection } = require("./db");

const authRouter = express.Router();

const ONE_MONTH_IN_SECONDS = 30 * 24 * 60 * 60;
authRouter.post("/login", async (request, response) => {
  try {
    const { email } = request.body;

    const account = await getCollection("accounts").findOne({ email });

    if (!account) {
      return response.status(404).end("Account not found");
    }
    const authToken = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: ONE_MONTH_IN_SECONDS,
    });

    response.setHeader(
      "Set-Cookie",
      `authToken=${authToken};path=/;Max-Age=${ONE_MONTH_IN_SECONDS}`
    );
    response.json(account);
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal server error");
  }
});

authRouter.post("/register", async (request, response) => {
  try {
    const { email } = request.body;

    const existingAccount = await getCollection("accounts").findOne({ email });

    if (existingAccount) {
      return response.status(409).end("Account already exists");
    }

    const inserted = await getCollection("accounts").insertOne({ email });
    if (!inserted.result.ok) {
      return response.status(500).end("Can not register account");
    }

    const account = inserted.ops[0];
    response.json(account);
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal server error");
  }
});
module.exports = authRouter;
