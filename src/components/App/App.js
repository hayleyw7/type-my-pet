import React, { Component } from 'react';

import './App.css';
// import X from '../X/X';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: []
    }
  }

  render() {  
    return (
      <div className="App">
        <h1>Type My Pet</h1>     
      </div>
    );
  }
}

export default App;