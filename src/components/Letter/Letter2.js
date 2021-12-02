import React, { Component } from 'react';

class Letter2 extends Component {
  constructor( {props} ) {
    super();
    this.props = props;    
    this.state = {
      letter2: ''
    };
  }

  render() {
    return (
      <section className='question'>

        <button
          className='sensor-btn'
          onClick={e => this.setLetter('s')}
        >
          Sensor
        </button>

        <button
          className='intuitor-btn'
          onClick={e => this.setLetter('n')}
        >
          Intuitor
        </button>

      </section>
    )    
  }
}

export default Letter2;