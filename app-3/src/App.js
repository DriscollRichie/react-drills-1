import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      filterString: '',
      foods: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }

  handleChange(e){
    this.setState({filterString: e})
  }

  render() {
    const foodsToDisplay = this.state.foods.filter(elem => {
      return elem.includes(this.state.filterString)
    }).map((elem, i) => {
      return <h2 key={i}>{elem}</h2>
    })
    
    return (
      <div className="App">
        <input onChange={(e) => this.handleChange(e.target.value)}/>
        {foodsToDisplay}
      </div>
    );
  }
}

export default App;
