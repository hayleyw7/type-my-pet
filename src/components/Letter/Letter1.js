import React, { Component } from 'react';

class Letter1 extends Component {
  constructor( {props} ) {
    super();
    this.props = props;    
  }

  render() {
    return (
      <section className='question'>

        <button
          className='introvert-btn'
          onClick={e => this.props.setLetter('I')}
        >
          Introvert
        </button>

        <button
          className='extrovert-btn'
          onClick={e => this.props.setLetter('E')}
        >
          Extrovert
        </button>

      </section>
    )    
  }
}

export default Letter1;