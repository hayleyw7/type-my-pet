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

        <h2 className='directions'>Click the square that best fits.</h2>

        <section className='btn-container'>

          <button
            className='answer-btn sensor-btn btn-2'
            onClick={e => this.props.setLetter('S')}
          >
            <p>Alert</p>
            <p>Literal</p>
            <p>Focused</p>
            <p>Present</p>
            <p>Details</p>
          </button>

          <button
            className='answer-btn intuitor-btn btn-1'
            onClick={e => this.props.setLetter('N')}
          >
            <p>Daydreaming</p>
            <p>Abstract</p>
            <p>Big Picture</p>
            <p>Creative</p>
            <p>Problem-Solver</p>
          </button>

        </section>
      </section>
    )    
  }
}

export default Letter2;