import React, { Component } from 'react';

class Letter3 extends Component {
  constructor( {props} ) {
    super();
    this.props = props;    
  }

  render() {
    return (
      <section className='question'>

        <button
          className='feeler-btn'
          onClick={e => this.props.setLetter('f')}
        >
          Feeler
        </button>

        <button
          className='thinker-btn'
          onClick={e => this.props.setLetter('t')}
        >
          Thinker
        </button>

      </section>
    )    
  }
}

export default Letter3;