import React, { Component } from 'react';

class Letter4 extends Component {
  constructor( {props} ) {
    super();
    this.props = props;    
  }

  render() {
    return (
      <section className='question'>

        <button
          className='perceiver-btn'
          onClick={e => this.props.setLetter('P')}
        >
          Perceiver
        </button>

        <button
          className='judger-btn'
          onClick={e => this.props.setLetter('J')}
        >
          Judger
        </button>

      </section>
    )    
  }
}

export default Letter4;