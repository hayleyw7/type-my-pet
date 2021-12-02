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
            <ul>
              <li>Alert</li>
              <li>Literal</li>
              <li>Focused</li>
              <li>Present</li>
              <li>Details</li>
            </ul>
          </button>

          <button
            className='answer-btn intuitor-btn btn-1'
            onClick={e => this.props.setLetter('N')}
          >
            <ul>
              <li>Daydreaming</li>
              <li>Abstract</li>
              <li>Big Picture</li>
              <li>Creative</li>
              <li>Problem-Solver</li>
            </ul>
          </button>

        </section>
      </section>
    )    
  }
}

export default Letter2;