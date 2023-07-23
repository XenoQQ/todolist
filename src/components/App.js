import './styles/App.css';
import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todoinput from './todoinput';
import Todolist from './todolist';
import Navbar from './navbar';

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
        parentID: '',
        text: todo,
        done: false,
        showSub: false,
        isSub: false
      }]);
    }
  }

  const addSubTodo = (todo, id) => {
    if (todo !== '') {
      setTodos([...todos, {
        id: uuidv4(),
        parentID: id,
        text: todo,
        done: false,
        showSub: false,
        isSub: true
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
  }

  const setShowSub = (targetId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === targetId) {
        return { ...todo, showSub: !todo.showSub }
      }
      return todo;
    })

    setTodos(updatedTodos);
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
      <Todoinput
        addTodo={addTodo} />
      <Navbar
        setListStatus={setListStatus}
        deleteDoneTodos={deleteDoneTodos}
        todos={todos} />
      <Todolist
        todos={todos}
        deleteTodo={deleteTodo}
        setDone={setDone}
        listStatus={listStatus}
        setShowSub={setShowSub}
        addSubTodo={addSubTodo} />
    </div>
  );
}

export default App;
