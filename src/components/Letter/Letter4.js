import React, { Component } from 'react';

class Letter4 extends Component {
  constructor( {props} ) {
    super();
    this.props = props;    
    this.state = {
      letter4: ''
    };
  }

  render() {
    return (
      <section className='question'>

        <button
          className='perceiver-btn'
          onClick={e => this.props.setLetter('p')}
        >
          Perceiver
        </button>

        <button
          className='judger-btn'
          onClick={e => this.props.setLetter('j')}
        >
          Judger
        </button>

      </section>
    )    
  }
}

export default Letter4;