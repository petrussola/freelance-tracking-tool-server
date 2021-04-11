exports.up = function (knex) {
  return knex.schema.createTable("jobs", (table) => {
    table.increments("jobId");
    table.text("name", 128);
    table.bigInteger("startTime");
    table.bigInteger("endTime");
    table.bigInteger("length");
    table.boolean("isFinished").defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("jobs");
};
