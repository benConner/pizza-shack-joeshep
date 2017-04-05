'use strict'

const { bookshelf } = require('../db/db');

const Contact = bookshelf.Model.extend({
  tableName: 'contacts'
});

module.exports = Contact
