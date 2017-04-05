'use strict'

const { bookshelf } = require('../db/database');

const Size = bookshelf.Model.extends({
  tableName: 'sizes'
})

module.exports = Size
