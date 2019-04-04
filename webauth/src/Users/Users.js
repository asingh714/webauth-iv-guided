import React, { Component } from "react";
import axios from "axios";

class Users extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    const endpoint = "http://localhost:5000/api/users";
    const token = localStorage.getItem("token");
    const requestOptions = {
      headers: {
        authorization: token
      }
    };

    axios
      .get(endpoint, requestOptions)
      .then(response =>
        this.setState({
          users: response.data.users
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    if (!this.state.users) return <h3>loading...</h3>
    return (
      <>
        <h2>List of Users:</h2>
        {this.state.users.map(user => (
          <li key={user.id}>{user.username}</li>
        ))}
      </>
    );
  }
}

export default Users;
