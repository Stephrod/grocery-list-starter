const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');

const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/grocery-list-starter');

const TaskModel = require('./models/TaskModel.js')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  TaskModel.find((err, tasks) => {
    // tasks === [{}, {}, {}]
    res.render('index', { tasks: tasks });
  });
});

app.post('/tasks', (req, res, next) => {
  var task = new TaskModel({
    name : req.body.name,
    quantity : req.body.quantity
  });

  task.save((err, task) => {
    res.redirect('/');
  });
});

const port = 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
