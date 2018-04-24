import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo/Todo'

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      tasks: ['Clean room', 'push to Github', 'code at DevMtn', 'kill myself']
    }
    this.addTasks = this.addTasks.bind(this)
  }
  handleChange(e) {
    this.setState({input: e})
  }
  addTasks() {
    this.setState({tasks: [...this.state.tasks, this.state.input], input: ''})
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>My to-do list:</h2>
        </div>
        <input onChange={e => this.handleChange(e.target.value)} value={this.state.input}/>
        <button onClick={this.addTasks}>Add</button>
        <Todo data={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
