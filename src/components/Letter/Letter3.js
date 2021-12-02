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

        <h2 className='directions'>Which square best fits your pet's vibe?</h2>

        <section className='btn-container'>

          <button
            className='answer-btn feeler-btn btn-1'
            onClick={e => this.props.setLetter('F')}
          >
            <p>Moody</p>
            <p>Sensitive</p>
            <p>Warm</p>
            <p>Empathetic</p>
            <p>Compassionate</p>
          </button>

          <button
            className='answer-btn thinker-btn btn-2'
            onClick={e => this.props.setLetter('T')}
          >
            <p>Stoic</p>
            <p>Insensitive</p>
            <p>Cold</p>
            <p>Aloof</p>
            <p>Indifferent</p>
          </button>

        </section>
      </section>
    )    
  }
}

export default Letter3;