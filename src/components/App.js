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
        isSub: false,
        isInputDisplayed: false,
        isSubInputDisplayed: false,
      }]);
    }
  };

  const updateTodo = (targetId, newText) => {
    setTodos(todos.map(todo => {
      if (todo.id === targetId) {
        console.log(todo.text);
        return {
          ...todo,
          text: newText,
          isInputDisplayed: !todo.isInputDisplayed
        };
      }
      return todo;
    }));
  };

  const handleInputDisplayed = (targetId) => {
    setTodos(todos.map(todo => {
      if (todo.id === targetId) {
        return {
          ...todo,
          isInputDisplayed: !todo.isInputDisplayed
        };
      }
      return todo;
    }));
  };

  const handleSubInputDisplayed = (targetId) => {
    setTodos(todos.map(todo => {
      if (todo.id === targetId) {
        return {
          ...todo,
          isSubInputDisplayed: !todo.isSubInputDisplayed
        };
      }
      return todo;
    }));
  };

  const addSubTodo = (targetID, todo) => {
    if (todo !== '') {
      setTodos([...todos, {
        id: uuidv4(),
        parentID: targetID,
        text: todo,
        done: false,
        showSub: false,
        isSub: true,
        isInputDisplayed: false
      }]);
    }

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
        todos={todos}
        setListStatus={setListStatus}
        deleteDoneTodos={deleteDoneTodos}
      />
      <Todolist
        todos={todos}
        deleteTodo={deleteTodo}
        setDone={setDone}
        listStatus={listStatus}
        setShowSub={setShowSub}
        addSubTodo={addSubTodo}
        updateTodo={updateTodo}
        handleInputDisplayed={handleInputDisplayed} 
        handleSubInputDisplayed={handleSubInputDisplayed}/>
    </div>
  );
}

export default App;
