
const TaskModel = require('../models/TaskModel');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const GroceryController = {

list: function(req, res, next) {
  TaskModel.find('tasks').exec()
  .then(tasks => res.render('index', {tasks}))
  .catch(err => next(err))
},

show: function(req, res, next) {
  TaskModel.findById(req.params.id).exec()
  .then(match => res.render('index', {match}))
  .catch(err => next(err))
},

create: function(req, res, next) {
  const task = new TaskModel({
    text: req.body.text,
    quantity: req.body.quantity
});
  task.save()
  .then(task => res.redirect('index'))
  .catch(err => next(err))
},

update: function(req, res, next) {
  TaskModel.findByIdAndUpdate({ _id: req.params.id }, {
    text: req.body.text,
    quantity: rexq.body.quantity
  }, { new: true }).exec()
    .then(tasks => res.render(tasks))
    .catch(err => next(err))
},

remove: function(req, res, next) {
  const id = req.params.id
  TaskModel.findByIdAndRemove({_id: id}).exec()
  .then(tasks => res.render(tasks))
  .catch(err => next(err))
  }
};

module.exports = GroceryController
