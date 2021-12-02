import React, { Component } from 'react';
import './Letter.css';

class Letter3 extends Component {
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
            className='answer-btn feeler-btn btn-1'
            onClick={e => this.props.setLetter('F')}
          >
            <ul>
              <li>Moody</li>
              <li>Sensitive</li>
              <li>Warm</li>
              <li>Empathetic</li>
              <li>Compassionate</li>
            </ul>
          </button>

          <button
            className='answer-btn thinker-btn btn-2'
            onClick={e => this.props.setLetter('T')}
          >
            <ul>
              <li>Stoic</li>
              <li>Insensitive</li>
              <li>Cold</li>
              <li>Aloof</li>
              <li>Indifferent</li>
            </ul>
          </button>

        </section>
      </section>
    )    
  }
}

export default Letter3;