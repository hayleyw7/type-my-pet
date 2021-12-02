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

        <h2 className='directions'>Which square best fits your pet's vibe?</h2>

        <section className='btn-container'>

          <button
            className='answer-btn perceiver-btn btn-2'
            onClick={e => this.props.setLetter('P')}
          >
            <p>Spontaneous</p>
            <p>Messy</p>
            <p>Inconsistent</p>
            <p>Chaotic</p>
            <p>Open-Minded</p>
          </button>

          <button
            className='answer-btn judger-btn btn-1'
            onClick={e => this.props.setLetter('J')}
          >
            <p>Particular</p>
            <p>Clean</p>
            <p>Consistent</p>
            <p>Organized</p>
            <p>Closed-Minded</p>
          </button>

        </section>
      </section>
    )    
  }
}

export default Letter4;