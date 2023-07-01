import './styles/App.css';
import React from 'react';
import { useState } from 'react';
import Todoinput from './todoinput';
import Todolist from './todolist';
import { v4 as uuidv4 } from 'uuid';

const App = () => {


  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (todo !== '') {
      setTodos([...todos, {
        id: uuidv4(),
        text: todo,
        done: false,
      }]);
    }
    console.log(todos);
  }

  const setDone = (targetId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === targetId) {
        return { ...todo, done: !todo.done }
      }
      return todo;
    })

    setTodos(updatedTodos);

    console.log(todos);
  }

  const deleteTodo = (targetId) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== targetId;
    });
    setTodos(newTodos);
  }

  return (
    <div className='todoframe'>
      <h1 className='todoframe__title'>TODO APP</h1>
      <h2 className='todoframe__subtitle'>Digital Deluxe Edition</h2>
      <Todoinput addTodo={addTodo} />
      <Todolist todos={todos} deleteTodo={deleteTodo} setDone={setDone} />

    </div>
  );
}

export default App;
