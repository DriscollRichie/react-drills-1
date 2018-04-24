import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './components/Image/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Image src={'http://www.rexflip.com/wp-content/uploads/2018/02/Nofap-Memes.jpg'}/>
      </div>
    );
  }
}

export default App;
