//import logo from './logo.svg';
import './App.css';
import '../StartPage/StartPage';
import StartPage from '../StartPage/StartPage';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginForm from '../Login/LoginForm';

function App() {
  return (
    <div className="App">
      <Router>
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <h1>Star-Ships Roll Playing Game</h1>
      <StartPage/>
      <LoginForm/>
      </Router>
      
    </div>
  );
}

export default App;
