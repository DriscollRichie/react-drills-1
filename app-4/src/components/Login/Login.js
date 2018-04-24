import React, { Component } from "react";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
    this.login = this.login.bind(this);
  }

  login() {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    this.setState({ username: "", password: "" });
  }

  handleChange(prop, value) {
    this.setState({ [prop]: value });
  }

  render() {
    return (
      <div>
        <h1>I am Login</h1>
        <div>
          <h2>Username</h2>
          <input
            onChange={e => this.handleChange("username", e.target.value)} value={this.state.username}
          />
          <br />
          <h2>Password</h2>
          <input
            onChange={e => this.handleChange("password", e.target.value)} value={this.state.password}
          />
        </div>
        <br />
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}
