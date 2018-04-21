import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      foods: ['spaghetti', 'ice cream', 'bologna', 'sushi', 'cheese']
    }
  }
  render() {
    const foodsToDisplay = this.state.foods.map((elem, i) => {
      return <div key={i}><h2>{elem}</h2></div>
    })
    return (
      <div className="App">
        {foodsToDisplay}
      </div>
    );
  }
}

export default App;