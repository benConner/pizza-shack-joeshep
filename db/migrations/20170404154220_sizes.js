
exports.up = function(knex, Promise) {
  // name, inches -- string and integer
  return knex.schema
  .createTable('sizes', (table) => {
      table.increments();
      table.string('name').notNullable().unique;
      table.integer('inches').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTable('sizes')
};

// 1) knex init -- creates the knexfile.js
// 2) edit knexfile -- add db name and the type of db (pg), and ad migration and seed paths
// 3) make migrations w/ knex migrate:make <name>
// 4) make your database in psql: "create database <name>"
// 5) command line: knex migrate:latest
