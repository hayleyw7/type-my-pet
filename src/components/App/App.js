import React, { Component } from 'react';

import './App.css';
import Letter1 from '../Letter/Letter1';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letter1: '',
      letter2: '',
      letter3: '',
      letter4: ''
    }
  }

  setLetter = (letter) => {
    this.setState({ letter1: letter });
    alert(letter)
  }

  render() {  
    return (
      <div className="App">
        <h1>Type My Pet</h1>
        <Letter1 setLetter={this.setLetter}/>
      </div>
    );
  }
}

export default App;