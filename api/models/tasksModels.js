const db = require("../../db/db-config");

module.exports = {
  createTask,
  pauseTask,
};

async function createTask(name, startTime) {
  const data = await db("jobs").insert({
    name: name,
    startTime: startTime,
  });
  return data;
}

async function getTask(id) {
  const job = await db("jobs").where({ jobId: id });
  return job[0];
}

async function pauseTask(id, diffTime) {
  const { length } = await getTask(id);
  if (!length) {
    const data = await db("jobs")
      .where({ jobId: id })
      .update({ length: "" + diffTime });
    if (data) {
      return await getTask(id);
    }
  } else {
    const lengthInNum = parseInt(length, 10);
    const diffTimeInNumb = lengthInNum + diffTime;
    const data = await db("jobs")
      .where({ jobId: id })
      .update({ length: "" + diffTimeInNumb });
    if (data) {
      return await getTask(id);
    }
  }
}
