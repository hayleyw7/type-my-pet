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
      status: '',
      typeArray: [],
      typeString: ''
    }
  }

  setLetter = (letter) => {
    this.setState({ letter1: this.state.typeArray.push(letter) });
    this.setState({ status: 'in progress' });

    if (this.state.typeArray.length === 4) {
      const typeToPrint = this.state.typeArray.join('')  
      this.setState({ typeString: typeToPrint });  
    }
  }

  begin = () => {
    this.setState({ status: 'start' });  
  }

  restart = () => {
    this.setState({ status: '', typeArray: [], typeString: '' });  
  }

  render() {  
    return (
      <div className="App">

        {!this.state.status &&
          <div>
            <h1>Type My Pet</h1>
            <Begin begin={this.begin} />
          </div>
        }

        {this.state.status === 'start' &&
          <div>
            <h1>Type My Pet</h1>
            <Letter1 setLetter={this.setLetter} />
          </div>
        }
        
        {this.state.typeArray.length === 1 &&
          <div>
            <h1>Type My Pet</h1>
            <Letter2 setLetter={this.setLetter} />
          </div>
        }

        {this.state.typeArray.length === 2 &&
          <div>
            <h1>Type My Pet</h1>
            <Letter3 setLetter={this.setLetter} />
          </div>
        }

        {this.state.typeArray.length === 3 &&
          <div>
            <h1>Type My Pet</h1>
            <Letter4 setLetter={this.setLetter} />
          </div>
        }

        {this.state.typeArray.length === 4 &&
          <div>
            <h1>Your Pet's Type</h1>
            <Result
              result={this.state.typeString}
              restart={this.restart}
            />
          </div>
        }

      </div>
    );
  }
}

export default App;