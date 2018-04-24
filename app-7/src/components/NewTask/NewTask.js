import React, { Component } from "react";

export default class NewTask extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
    this.handleAddTask = this.handleAddTask.bind(this)
  }

  handleChange(e) {
    this.setState({ input: e });
  }

  handleAddTask() {
    this.props.addTask(this.state.input)
    this.setState({input: ''})
  }

  render() {
    return (
      <div>
        <input
          onChange={e => this.handleChange(e.target.value)}
          value={this.state.input}
        />
        <button onClick={this.handleAddTask}>Add</button>
      </div>
    );
  }
}
