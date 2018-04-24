import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTask from './components/NewTask/NewTask'
import List from './components/List/List'

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: []
    }
    this.addTask = this.addTask.bind(this)
  }

  addTask(task) {
    this.setState({tasks: [...this.state.tasks, task]})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>My to-do list:</h2>
        </div>
        <NewTask addTask={this.addTask}/>
        <List data={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
