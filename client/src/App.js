import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [todos, setTodos] = useState([])
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const res = await fetch("http://localhost:5001/users", {
      method: "GET",
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify(res)
    })
    setUsers(res)
  }

  const getTodos = async () => {
    const res = await fetch("http://localhost:5001/todos/", {
      method: "GET",
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify(res)
    })
    setTodos(res)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <button onClick={getUsers}>Users</button>
          <button onClick={getTodos}>TODOs list</button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
