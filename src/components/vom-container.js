import React from 'react';
import VOMFactory from '../components/vom-factory';

export default class VomContainer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {VOMFactory.build('strip-4-8')}
      </div>
    );
  }
}
