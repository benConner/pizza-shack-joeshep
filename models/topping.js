'use strict'

const { bookshelf } = require('../db/database');

const Topping = bookshelf.Model.extends({
  tableName: 'toppings'
})

module.exports = Topping
