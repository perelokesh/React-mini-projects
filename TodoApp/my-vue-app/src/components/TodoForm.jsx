import React, { useState } from 'react';
import {Button, Card, TextField } from '@mui/material'
import axios from 'axios';
import TodoList from './TodoList';
function TodoForm({ addTodo }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [user, setUser] = useState('')

  const handleSubmit =  async (e) => {
    e.preventDefault();
    // if (!title || !description) return;
    // addTodo({ title, description });
    // setTitle('');
    // setDescription('');
    try {
      const res = await axios(
        {
          method:'post',
          url:'http://localhost:3002/api/createTodo',
          body:{
            title:title,
            description:description
          },
          headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
          }
        }
      )  
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{display:'flex', justifyContent:'center', width:600, flexDirection:'column'}}>
      {/* <h2>{name}</h2> */}
      <form onSubmit={handleSubmit}>
      <Card variant={'outlined'} style={{gap:20 , padding:20}}>
          <TextField 
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          fullWidth={true}
          variant='outlined'
          label="Title"
          value={title}
          />
          <TextField 
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          fullWidth={true}
          variant='outlined'
          label="Description"
          value={description}
          />
          <Button
          type="submit"
          size={'large'}
          variant={'outlined'}               
          >
            Add Task
          </Button>
      </Card>
      </form>
      <TodoList/>
    </div>
  );
}

export default TodoForm;
