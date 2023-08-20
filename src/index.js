import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/styles/index.css';
import Todoapp from './components/todoapp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Todoapp />
    
  </React.StrictMode>
);