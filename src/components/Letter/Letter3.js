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

        <button
          className='answer-btn feeler-btn'
          onClick={e => this.props.setLetter('F')}
        >
          Feeler
        </button>

        <button
          className='answer-btn thinker-btn'
          onClick={e => this.props.setLetter('T')}
        >
          Thinker
        </button>

      </section>
    )    
  }
}

export default Letter3;