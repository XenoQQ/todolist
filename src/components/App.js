import './styles/App.css';
import React from 'react';
import { useState } from 'react';
import Todoinput from './todoinput';
import Todolist from './todolist';

const App = () => {

  const [todo, setTodo] = useState({
    id: '',
    text: '',
    done: false
  });
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.text !== '') {
      setTodos([...todos, todo]);
      setTodo({
        id: '',
        text: '',
        done: false
      });
    }
    console.log(todos);
  }

  const setDone = () => {
    
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter((_, index) => {
      return id !== index;
    });
    setTodos(newTodos);
  }

  return (
    <div className='todoframe'>
      <h1 className='todoframe__title'>TODO APP</h1>
      <h2 className='todoframe__subtitle'>Digital Deluxe Edition</h2>
      <Todoinput todo={todo} addTodo={addTodo} setTodo={setTodo} />
      <Todolist todos={todos} deleteTodo={deleteTodo} />

    </div>
  );
}

export default App;
