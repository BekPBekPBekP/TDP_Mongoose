const express = require("express");

const app = express();

const bodyParser = require("body-parser")

app.use(bodyParser.json())

const movieRoutes = require("./movielist");

app.use("/movies", movieRoutes);

const server = app.listen(3011, () => console.log("Started on", server.address().port));