import React, { Component } from 'react';

import './App.css';
import Begin from '../Begin/Begin';
import Letter1 from '../Letter/Letter1';
import Letter2 from '../Letter/Letter2';
import Letter3 from '../Letter/Letter3';
import Letter4 from '../Letter/Letter4';
import Result from '../Result/Result';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeArray: [],
      typeString: ''
    }
  }

  setLetter = (letter) => {
    this.setState({ letter1: this.state.typeArray.push(letter) });

    const typeToPrint = this.state.typeArray.join('')  

    if (this.state.typeArray.length < 4) {
      alert(typeToPrint)

    } else {
      this.setState({ typeString: typeToPrint });  
    }
  }

  begin = () => {
    
  }

  render() {  
    return (
      <div className="App">
        <h1>Type My Pet</h1>
        <Begin />
        <Letter1 setLetter={this.setLetter} />
        <Letter2 setLetter={this.setLetter} />
        <Letter3 setLetter={this.setLetter} />
        <Letter4 setLetter={this.setLetter} />
        <Result result={this.state.typeString} />
      </div>
    );
  }
}

export default App;