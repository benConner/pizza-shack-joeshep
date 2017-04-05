'use strict'

const { bookshelf } = require('../db/database');

const User = bookshelf.Model.extends({
  tableName: 'users'
})

module.exports = User;
