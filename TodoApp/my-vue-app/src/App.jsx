import React, { useState, useEffect } from 'react';
import TodoForm from '../src/components/TodoForm';
import TodoList from '../src/components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error('Error fetching todos:', error));
  }, []);

  const addTodo = (newTodo) => {
    fetch('http://localhost:3000/api/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    })
      .then((response) => response.json())
      .then((data) => {
        setTodos([...todos, data]);
      })
      .catch((error) => console.error('Error adding todo:', error));
  };

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
