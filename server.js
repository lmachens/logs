require("dotenv").config();

const express = require("express");
const path = require("path");
const jsonServer = require("json-server");

const app = express();
const port = process.env.PORT || 3001;
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Serve any static files
app.use(express.static(path.join(__dirname, "client/build")));
app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

app.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);
app.use(router);
app.use(middlewares);

// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
