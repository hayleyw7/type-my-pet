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

  renderProgress = (questionNumber) => (
    <div className="progress" aria-label={`Question ${questionNumber} of 4`}>
      {[1, 2, 3, 4].map((step) => (
        <span
          key={step}
          className={`progress-dot${step <= questionNumber ? ' active' : ''}`}
        />
      ))}
    </div>
  )

  render() {
    const questionNumber =
      this.state.typeArray.length === 0 && this.state.status === 'start'
        ? 1
        : this.state.typeArray.length > 0 && this.state.typeArray.length < 4
        ? this.state.typeArray.length + 1
        : 0;

    return (
      <div className="App">

        {!this.state.status &&
          <div className="screen">
            <h1>Type My Pet</h1>
            <p className="tagline">A quick quiz to find your pet's personality type</p>
            <Begin begin={this.begin} />
          </div>
        }

        {this.state.status === 'start' &&
          <div className="screen">
            <h1>Type My Pet</h1>
            {this.renderProgress(questionNumber)}
            <Letter1 setLetter={this.setLetter} />
          </div>
        }

        {this.state.typeArray.length === 1 &&
          <div className="screen">
            <h1>Type My Pet</h1>
            {this.renderProgress(questionNumber)}
            <Letter2 setLetter={this.setLetter} />
          </div>
        }

        {this.state.typeArray.length === 2 &&
          <div className="screen">
            <h1>Type My Pet</h1>
            {this.renderProgress(questionNumber)}
            <Letter3 setLetter={this.setLetter} />
          </div>
        }

        {this.state.typeArray.length === 3 &&
          <div className="screen">
            <h1>Type My Pet</h1>
            {this.renderProgress(questionNumber)}
            <Letter4 setLetter={this.setLetter} />
          </div>
        }

        {this.state.typeArray.length === 4 &&
          <div className="screen">
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