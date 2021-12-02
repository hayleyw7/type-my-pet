import React, { Component } from 'react';

class Begin extends Component {
  constructor( {props} ) {
    super();
    this.props = props;     
  }

  render() {
    return (
      <button
        className='begin-btn'
        onClick={e => this.props.begin()}
      >
        Begin
      </button>
    )    
  }
}

export default Begin;