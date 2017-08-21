import React, { Component } from 'react';

export class DisplayComponent extends Component {
  render() {
    return (
      <div>{this.props.sayWhat}</div>
    );
  }
}

export default DisplayComponent
