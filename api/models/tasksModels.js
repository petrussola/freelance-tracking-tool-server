const db = require("../../db/db-config");

module.exports = {
  createTask,
  pauseTask,
  finishTask,
  editName,
  getAll,
  getTask
};

async function createTask(name, startTime) {
  const data = await db("jobs").insert(
    {
      name: name,
      startTime: startTime,
    },
    ["jobId"]
  );
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
      .update({ length: diffTime }, ["jobId"]);
    if (data) {
      return await getTask(id);
    }
  } else {
    const lengthInNum = parseInt(length, 10);
    const data = await db("jobs")
      .where({ jobId: id })
      .update({ length: lengthInNum + diffTime }, ["jobId"]);
    if (data) {
      return await getTask(id);
    }
  }
}

async function finishTask(id, diffTime, endTime) {
  const { length } = await getTask(id);
  const data = await db("jobs")
    .where({ jobId: id })
    .update(
      {
        length: length + diffTime,
        endTime,
        isFinished: true,
      },
      ["jobId"]
    );
  return await getTask(id);
}

async function editName(name, id) {
  const data = await db("jobs").where({ jobId: id }).update({ name }, "jobId");
  return data;
}

async function getAll() {
  return await db("jobs");
}
