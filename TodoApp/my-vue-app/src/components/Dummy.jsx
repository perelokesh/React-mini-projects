import { useState, useEffect } from 'react';
import TodoForm from '../src/components/TodoForm';
import TodoList from '../src/components/TodoList';
import ButtonClick from './components/SearchBar';
import './App.css';
import Signup from './components/Signup';
import AppBar from './components/AppBar';

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
  const deleteTodo = (index) => {
      const todoToDelete = todos[index];
      fetch(`http://localhost:3000/api/todos/${todoToDelete._id}`, {
        method:'DELETE' ,
        headers:{
         'content-type': 'application/json'
        },
      })
      .then((response) => response.json())
      .then((deletedTodo) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        console.log("lolo",updatedTodos)
        setTodos(updatedTodos);
        console.log("lolo2",updatedTodos)

      })
      .catch((error) => console.error('Error deleting todo:', error));      
  }
//  const searchRequest = 
  return (
    <div style={{backgroundColor:"#eeeeee",width:"100vw", height:"100vh"}}>
     <AppBar/>
    {/* <ButtonClick />
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo ={deleteTodo}/> */}
      <Signup/>
      </div>
        );
}

export default App;
