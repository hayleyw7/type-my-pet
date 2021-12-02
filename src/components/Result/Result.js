import React, { Component } from 'react';

class Result extends Component {
  constructor( {props} ) {
    super();
    this.props = props;    
  }

  render() {
    return (
      <section className='results'>
        <h2>{this.props.result}</h2>

        <button
          className='restart-btn'
          onClick={e => this.props.restart()}
        >
          Restart
        </button>

      </section>
    )    
  }
}

export default Result;