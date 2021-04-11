exports.up = function (knex) {
  return knex.schema.createTable("jobs", (table) => {
    table.increments("jobId");
    table.text("name", 128);
    table.integer("startTime");
    table.integer("endTime");
    table.integer("length");
    table.boolean("isFinished").defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("jobs");
};
