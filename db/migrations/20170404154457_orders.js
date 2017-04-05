
exports.up = function(knex, Promise) {
  // name, email, phone, size, topping
  return knex.schema
  .createTable('orders', (table) => {
    table.increments('contact_id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('phone').notNullable();
    table.string('size').notNullable();
    table.specificType('toppings', knex.raw('text[]')).notNullable().defaultTo('{"cheese"}');
  });
};

exports.down = (knex, Promise) => knex.schema.dropTable('orders')
