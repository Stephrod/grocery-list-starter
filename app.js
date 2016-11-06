const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/grocery-list-starter');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const tasks = require('./routes/tasks.js');
app.use('/tasks', tasks);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/*', function(req, res, next){
  res.redirect('/tasks')
});

const port = 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
