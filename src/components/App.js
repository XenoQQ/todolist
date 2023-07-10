import './styles/App.css';
import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todoinput from './todoinput';
import Todolist from './todolist';
import Navbar from './navbar';
import Statusbar from './statusbar';


const App = () => {


  const [todos, setTodos] = useState([]);
  const [listStatus, setListStatus] = useState({
    visibleAll: true,
    vivibleDone: false,
    visibleUndone: false,
  });

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

  const deleteDoneTodos = () => {
    const newTodos = todos.filter((todo) => {
      return todo = !todo.done;
    });
    setTodos(newTodos);
  }

  return (
    <div className='todoframe'>
      <h1 className='todoframe__title'>TODO APP</h1>
      <p className='todoframe__subtitle'>Digital Deluxe Edition</p>
      <Todoinput addTodo={addTodo} />
      <Navbar setListStatus={setListStatus} deleteDoneTodos={deleteDoneTodos} />
      <Statusbar todos={todos} />
      <Todolist todos={todos} deleteTodo={deleteTodo} setDone={setDone} listStatus={listStatus} />
    </div>
  );
}

export default App;
