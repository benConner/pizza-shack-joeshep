'use strict'
const { knex } = require('../db');
const sizes = require('./sizes.json');

console.log(sizes);

const sizePromises = sizes.map( ( {name, inches} ) => {
  return knex('sizes').insert({name, inches});
});

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sizes').del()
    .then( () => {
      // Inserts seed entries
      return Promise.all(sizePromises);
    });
};
