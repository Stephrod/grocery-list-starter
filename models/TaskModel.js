const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  'name': String,
  'quantity': Number
});

module.exports = mongoose.model('tasks', taskSchema)
;
