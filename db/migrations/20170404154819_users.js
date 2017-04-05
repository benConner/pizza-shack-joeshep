
exports.up = function(knex, Promise) {
  // email, password -- strings
  return knex.schema
  .createTable('users', (table) => {
    table.increments();
    table.string('email').notNullable();
    table.string('password').notNullable();;
  })
};

exports.down = (knex, Promise) => knex.schema.dropTable('users')
