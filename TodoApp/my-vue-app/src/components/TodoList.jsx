import React from 'react';

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
