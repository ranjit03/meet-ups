exports.up = function(knex, Promise) {
  return knex.schema.createTable("events", table => {
    table.increments("id").primary();
    table.integer("user_id");
    table.string("name");
    table.string("location");
    table.string("description");
    table.string("category");
    table.date("date");
    table.boolean("is_open");
    table.string("type");
    table.string("image");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("events");
};