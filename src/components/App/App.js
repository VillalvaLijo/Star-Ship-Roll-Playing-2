//import logo from './logo.svg';
import './App.css';
import '../StartPage/StartPage';
import StartPage from '../StartPage/StartPage';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from "react-router-dom";
import LoginForm from '../Login/LoginForm';
import RegisterPage from '../RegisterPage/RegisterPage';

import AboutPage from '../AboutPage/AboutPage';
import ShipYard from '../ShipYard/ShipYard';
import BattlePage from '../BattlePage/BattlePage';
import BuildShip from '../BuildShip/BuildShip';




function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Redirect exact from="/" to="/home" />
          {/* 
            Build a header that says star-ship roll playing game
          <h1>Star-Ships Roll Playing Game</h1> */}
          <Route
            exact path= "/home"
            component = {StartPage}
            />
           {/* <StartPage/> */}
          <Route 
            exact path = "/about"
            component= {AboutPage}
            />
            
          {/* <LoginForm/> */}
          <Route
            exact path = "/shipyard"
            component = {ShipYard}
            />
          <Route
            exact path = "/Battle"
            component = {BattlePage}
            />
          <Route 
            exact path = "/buildship"
            component = {BuildShip}
            />

          <Route 
            exact path = "/testLogin"
            component = {LoginForm}
            />
            <Route 
            exact path = "/testRegister"
            component = {RegisterPage}
            />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
