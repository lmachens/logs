require("dotenv").config();

const express = require("express");
const path = require("path");
const { connectDB } = require("./lib/db");
const logsRouter = require("./lib/logsRouter");
const bodyParser = require("body-parser");
const authRouter = require("./lib/authRouter");

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

// Serve any static files
app.use(express.static(path.join(__dirname, "client/build")));
app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

app.use("/api/logs", logsRouter);
app.use("/api", authRouter);

// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

const run = async () => {
  await connectDB();
  console.log("Database connected");
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
};

run();
