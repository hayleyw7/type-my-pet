import React, { Component } from 'react';
import './Letter.css';

class Letter4 extends Component {
  constructor( {props} ) {
    super();
    this.props = props;    
  }

  render() {
    return (
      <section className='question'>

        <button
          className='answer-btn perceiver-btn btn-2'
          onClick={e => this.props.setLetter('P')}
        >
          Perceiver
        </button>

        <button
          className='answer-btn judger-btn btn-1'
          onClick={e => this.props.setLetter('J')}
        >
          Judger
        </button>

      </section>
    )    
  }
}

export default Letter4;