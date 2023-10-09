import React, { useState } from 'react';
import { FormControl } from '@mui/base';

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    addTodo({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );

  // return (
  //   <FormControl >
  //     <input 
  //     type="text" 
  //     placeholder='Title' 
  //     value = {title} 
  //     onChange={(e) => setTitle(e.target.value)}/>
  //     <input 
  //     type="text" 
  //     placeholder="Description" 
  //     value={description} 
  //     onChange={(e) => setDescription(e.target.value)}/>
  //     <button type="submit" onSubmit={handleSubmit}>Add Task</button>

  //   </FormControl>
  // );
}

export default TodoForm;
