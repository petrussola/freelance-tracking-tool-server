const express = require("express");
const router = express.Router();
const tasks = require("../models/tasksModels");

router.get("/", (req, res) => {
  res.status(200).json({ status: "ok", data: "server is up and running" });
});

router.post("/create-task", async (req, res) => {
  const { name, startTime } = req.body;
  try {
    const data = await tasks.createTask(name, "" + startTime);
    res.status(200).json({
      status: "ok",
      data: {
        id: data[0],
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      data: {
        message: err.message,
      },
    });
  }
});

router.put("/pause-task", async (req, res) => {
  const { id, diffTime } = req.body;
  try {
    const data = await tasks.pauseTask(id, diffTime);
    res.status(200).json({ status: "ok", data });
  } catch (err) {
    res.status(500).json({ status: "fail", data: { message: err.message } });
  }
});

module.exports = router;
