import React, { Component } from 'react';

import Home from '../components/home';

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <Home />
        </div>
      </div>
    );
  }
}
