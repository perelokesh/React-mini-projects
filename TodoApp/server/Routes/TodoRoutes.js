const express = require('express');
const router = express.Router();
const todoController = require('../Controller/TodoController');

router.post('/create', todoController.createToDo);
router.get('/todos', todoController.getAllToDos);

module.exports = router;
