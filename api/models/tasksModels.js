const db = require("../../db/db-config");

module.exports = {
  createTask,
};

async function createTask(name, startTime) {
  const data = await db("jobs").insert({
    name: name,
    startTime: parseInt(startTime, 10),
  });
  return data;
}
