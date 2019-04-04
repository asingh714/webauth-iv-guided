import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import "./App.css";

import Home from "./Home/Home";
import Login from "./Login/Login";
import Users from "./Users/Users";

class App extends Component {
  render() {
    return (
      <>
        <header>
          <NavLink exact to="/">
            Home
          </NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/users">Users</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/login">Login</NavLink>
        </header>
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/login" component={Login} />
        </main>
      </>
    );
  }
}

export default App;
