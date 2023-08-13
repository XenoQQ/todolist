import './styles/App.css';
import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todoinput from './todoinput';
import Todolist from './todolist';
import Navbar from './navbar';

const App = () => {

  const [todos, setTodos] = useState([]);

  const [lastUpdatedTodoID, setLastUpdatedTodoID] = useState('');

  const handleLastUpdatedTodoID = (targetID) => {
    setLastUpdatedTodoID(targetID);
    setTimeout(() => {
      setLastUpdatedTodoID('');
    }, 500);
  }

  const [listStatus, setListStatus] = useState({
    visibleAll: true,
    vivibleDone: false,
    visibleUndone: false,
    fadeStatus: '',
  });

  const handleListStatus = (newStatus) => {
    setListStatus(status => ({ ...status, fadeStatus: 'fade' }))
    setTimeout(() => {
      setListStatus(() => ({ ...newStatus, fadeStatus: 'unfade' }))
    }, 500)
  };

  const addTodo = (todo) => {
    if (todo !== '') {
      const newTodo = {
        id: uuidv4(),
        parentID: '',
        text: todo,
        done: false,
        showSub: false,
        isSub: false,
        isInputDisplayed: false,
        isSubInputDisplayed: false,
        deleteStatus: ''
      };
      setTodos([...todos, newTodo]);
      handleLastUpdatedTodoID(newTodo.id);
    }
  };

  const updateTodo = (targetId, newText) => {
    setTodos(todos.map(todo => {
      if (todo.id === targetId) {
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
        handleLastUpdatedTodoID(todo.id);
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

    const updatedTodos = todos.map((todo) => {
      if (todo.id === targetId) {
        return { ...todo, deleteStatus: 'onDelete' }
      }
      return todo;
    })

    setTodos(updatedTodos);

    const newTodos = todos.filter((todo) => {
      return todo.id !== targetId;
    });
    setTimeout(() => {
      setTodos(newTodos);
    }, 500);
  }

  const deleteDoneTodos = () => {

    const updatedTodos = todos.map((todo) => {
      if (todo.done) {
        return { ...todo, deleteStatus: 'onDelete' }
      }
      return todo;
    })

    setTodos(updatedTodos);

    const newTodos = todos.filter((todo) => {
      return todo = !todo.done;
    });
    setTimeout(() => {
      setTodos(newTodos);
    }, 500);
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
        handleListStatus={handleListStatus}
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
        handleSubInputDisplayed={handleSubInputDisplayed}
        lastUpdatedTodoID={lastUpdatedTodoID} />
    </div>
  );
}

export default App;
