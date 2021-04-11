const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

// routes
const taskRouter = require("./routes/tasksRouter");

const server = express();

server.use(cors());
server.use(express.json());
server.use(helmet());

server.get("/", taskRouter);

server.post("/create-task", taskRouter);

module.exports = server;
