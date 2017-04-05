
exports.up = function(knex, Promise) {
  // name, email, phone, message  -- required strings
  return knex.schema
  .createTable('contacts', (table) => {
    table.increments();
    table.string('name').notNullable().unique();
    table.string('email').notNullable();
    table.string('phone').notNullable();
    table.string('message').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('contacts')
};
