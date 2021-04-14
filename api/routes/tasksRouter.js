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

router.put("/finish-task", async (req, res) => {
  const { id, diffTime, stopTime } = req.body;
  try {
    const data = await tasks.finishTask(id, diffTime, stopTime);
    res.status(200).json({ status: "ok", data });
  } catch (err) {
    res.status(500).json({ status: "fail", data: { message: err.message } });
  }
});

router.put("/edit-name", async (req, res) => {
  const { name, id } = req.body;
  try {
    if (typeof name !== "string" || null) {
      throw new Error("Name must by a string");
    }
    const data = await tasks.editName(name, id);
    res.status(200).json({ status: "ok", data });
  } catch (err) {
    res.status(500).json({ status: "fail", data: { message: err.message } });
  }
});

router.get("/tasks", async (req, res) => {
  try {
    const data = await tasks.getAll();
    res.status(200).json({ status: "ok", data });
  } catch (err) {
    res.status(500).json({ status: "fail", data: { message: err.message } });
  }
});

router.get("/task/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await tasks.getTask(parseInt(id, 10));
    res.status(200).json({ sucess: "ok", data });
  } catch (err) {
    res.status(500).json({ status: "fail", data: { message: err.message } });
  }
});

router.delete("/task/:id/delete", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await tasks.deleteTask(parseInt(id, 10));
    res.status(200).json({ sucess: "ok", data });
  } catch (err) {
    res.status(500).json({ status: "fail", data: { message: err.message } });
  }
});

module.exports = router;
