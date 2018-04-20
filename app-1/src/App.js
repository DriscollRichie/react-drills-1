import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }

  handleChange(e) {
    this.setState({input: e})
  }
  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.handleChange(e.target.value)}/>
        <p>{this.state.input}</p>
      </div>
    );
  }
}

export default App;
