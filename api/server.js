const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const server = express();

server.use(cors());
server.use(express.json());
server.use(helmet());

server.get("/", (req, res) => {
  res.json(`Listening on port ${process.env.PORT}`);
});

module.exports = server;
