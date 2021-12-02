import React, { Component } from 'react';
import './Letter.css';

class Letter1 extends Component {
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
            className='answer-btn introvert-btn'
            onClick={e => this.props.setLetter('I')}
          >
            <ul>
              <li>Shy</li>
              <li>Solitary</li>
              <li>Hides</li>
              <li>Lounges</li>
              <li>Passive</li>
            </ul>
          </button>

          <button
            className='answer-btn extrovert-btn'
            onClick={e => this.props.setLetter('E')}
          >
            <ul>
              <li>Clingy</li>
              <li>Needy</li>
              <li>Vocal</li>
              <li>Playful</li>
              <li>Zoomies</li>
            </ul>
          </button>

        </section>
      </section>
    )    
  }
}

export default Letter1;