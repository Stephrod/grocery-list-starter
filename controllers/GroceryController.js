
const TaskModel = require('../models/TaskModel');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const GroceryController = {

list: function(req, res, next) {
  TaskModel.find.exec()
  .then(tasks => res.json(tasks))
  .catch(err => next(err))
},

show: function(req, res, next) {
  TaskModel.findById(req.params.id).exec()
  .then(tasks => res.json(tasks)
  .catch(err => next(err));
},

create: function(req, res, next) {
  new TaskModel({text: req.body.text, quantity: req.body.quantity}).save()
});
  .then(task => res.json(tasks))
  .catch(err => next(err));
},

update: function(req, res, next) {
  TaskModel.findById(req.params.id }.exec()
    .then(tasks => {
      text: req.body.text,
      quantity: req.body.quantity,
      return tasks.save();
    })
    .then(tasks => res.json(tasks))
    .catch(err => next(err));
},

remove: function(req, res, next) {
  TaskModel.findByIdAndRemove(req,params.id).exec()
  .then(tasks => res.json(tasks))
  .catch(err => next(err));
};

module.exports = GroceryController
