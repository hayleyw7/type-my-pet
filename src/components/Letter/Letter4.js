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

        <h2 className='directions'>Click the square that best fits.</h2>

        <section className='btn-container'>

          <button
            className='answer-btn perceiver-btn btn-2'
            onClick={e => this.props.setLetter('P')}
          >
            <ul>
              <li>Spontaneous</li>
              <li>Messy</li>
              <li>Inconsistent</li>
              <li>Chaotic</li>
              <li>Open-Minded</li>
            </ul>
          </button>

          <button
            className='answer-btn judger-btn btn-1'
            onClick={e => this.props.setLetter('J')}
          >
            <ul>
              <li>Particular</li>
              <li>Clean</li>
              <li>Consistent</li>
              <li>Organized</li>
              <li>Closed-Minded</li>
            </ul>
          </button>

        </section>
      </section>
    )    
  }
}

export default Letter4;