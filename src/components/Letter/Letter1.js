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

        <h2 className='directions'>Which square best fits your pet's vibe?</h2>

        <section className='btn-container'>

          <button
            className='answer-btn btn-1 introvert-btn'
            onClick={e => this.props.setLetter('I')}
          >
            <p>Shy</p>
            <p>Solitary</p>
            <p>Hides</p>
            <p>Lounges</p>
            <p>Passive</p>
          </button>

          <button
            className='answer-btn btn-2 extrovert-btn'
            onClick={e => this.props.setLetter('E')}
          >
            <p>Clingy</p>
            <p>Needy</p>
            <p>Vocal</p>
            <p>Playful</p>
            <p>Zoomies</p>
          </button>

        </section>
      </section>
    )    
  }
}

export default Letter1;