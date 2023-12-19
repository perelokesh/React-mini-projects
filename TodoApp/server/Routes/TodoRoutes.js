const express = require('express');
const todoRoutes = express.Router();
const todoController = require('../Controller/TodoController');

todoRoutes.post('/createTodo', todoController.createToDo);
todoRoutes.get('/todos', todoController.getAllToDos);
todoRoutes.delete('/todos/:id', todoController.deleteTodos);

module.exports = todoRoutes;
