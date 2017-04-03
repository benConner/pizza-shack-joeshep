'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes/')

//pug config
app.set('view engine', 'pug');

app.locals.company = '🇮🇹Pizza Shack🍕'
app.locals.body = {};
app.locals.body.magic = 'Fooooo!'

app.use(express.static('public'));
app.use(routes);

app.use((req, res) => {
  res.render('404')
})
const port = process.env.PORT || 3000
app.listen(port, ()=>{
  console.log('listening to port', port);
});
