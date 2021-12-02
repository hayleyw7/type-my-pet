import React, { Component } from 'react';

class Letter1 extends Component {
  constructor( {props} ) {
    super();
    this.props = props;    
    this.state = {
      letter1: ''
    };
  }

  render() {
    return (
      <section className='question'>

        <button
          className='introvert-btn'
          onClick={e => this.props.setLetter('i')}
        >
          Introvert
        </button>

        <button
          className='extrovert-btn'
          onClick={e => this.props.setLetter('e')}
        >
          Extrovert
        </button>

      </section>
    )    
  }
}

export default Letter1;