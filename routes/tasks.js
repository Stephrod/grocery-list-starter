const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const TaskModel = require('../models/TaskModel');
const GroceryController = require('../controllers/GroceryController')

router.get('/', GroceryController.list);

router.get('/:id', GroceryController.show);

router.post('/', GroceryController.create);

router.put('/:id', GroceryController.update);

router.delete('/:id', GroceryController.remove);

module.exports = router
