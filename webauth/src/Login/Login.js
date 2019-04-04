import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  state = {
    username: "frodo",
    password: "pass"
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const endpoint = "http://localhost:5000/api/auth/login"
    axios
      .post(endpoint, this.state)
      .then(response => {
        console.log(response.data)
        localStorage.setItem("token", response.data.token); // remember, we get back a token.
      })
      .catch(error => console.log(error));
  };



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleInputChange}
            placeholder="Username"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            placeholder="Password"
          />
        </div>
        <button type="submit">Log in</button>
      </form>
    );
  }

}

export default Login;