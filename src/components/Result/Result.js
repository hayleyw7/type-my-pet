import React, { Component } from 'react';

class Letter4 extends Component {
  constructor( {props} ) {
    super();
    this.props = props;    
  }

  render() {
    return (
      <h2>{this.props.result}</h2>
    )    
  }
}

export default Letter4;