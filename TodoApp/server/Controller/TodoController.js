const ToDo = require('../Models/TodoModel');

// Create a new ToDo
const createToDo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newToDo = new ToDo({ title, description });
    console.log("todo", newToDo)
    const savedToDo = await newToDo.save();
    res.status(201).json(savedToDo);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create ToDo' });
  }
};

// Get all ToDos
const getAllToDos = async (req, res) => {
  try {
    const todos = await ToDo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch ToDos' });
  }
};

module.exports = {createToDo, getAllToDos}