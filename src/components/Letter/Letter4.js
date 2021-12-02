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
              <li>Shy</li>
              <li>Solitary</li>
              <li>Hides</li>
              <li>Lounges</li>
              <li>Passive</li>
            </ul>
          </button>

          <button
            className='answer-btn judger-btn btn-1'
            onClick={e => this.props.setLetter('J')}
          >
            <ul>
              <li>Shy</li>
              <li>Solitary</li>
              <li>Hides</li>
              <li>Lounges</li>
              <li>Passive</li>
            </ul>
          </button>

        </section>
      </section>
    )    
  }
}

export default Letter4;