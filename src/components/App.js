import './styles/App.css';
import React from 'react';
import { useState } from 'react';
import Todoinput from './todoinput';
import Todolist from './todolist';

const App = () => {


  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (todo !== '') {
      setTodos([...todos, {
        text: todo,
        done: false,
      }]);
    }
    console.log(todos);
  }

  const setDone = (idx) => {
    const updatedTodos = todos.map((todo, index) => {
      if (index === idx) {
        return {...todo, done: !todo.done}
      }
      return todo;
    })

    setTodos(updatedTodos);

    console.log(todos);
  }

  const deleteTodo = (idx) => {
    const newTodos = todos.filter((_, index) => {
      return idx !== index;
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
