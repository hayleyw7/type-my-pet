import React, { Component } from 'react';
import './Letter.css';

class Letter2 extends Component {
  constructor( {props} ) {
    super();
    this.props = props;
  }

  render() {
    return (
      <section className='question'>

        <button
          className='answer-btn sensor-btn btn-2'
          onClick={e => this.props.setLetter('S')}
        >
          Sensor
        </button>

        <button
          className='answer-btn intuitor-btn btn-1'
          onClick={e => this.props.setLetter('N')}
        >
          Intuitor
        </button>

      </section>
    )    
  }
}

export default Letter2;