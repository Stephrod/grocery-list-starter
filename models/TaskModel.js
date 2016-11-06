const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  'text': String,
  'quantity': String
});

module.exports = mongoose.model('task', taskSchema)
;
