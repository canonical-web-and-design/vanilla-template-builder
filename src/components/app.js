import '../styles/main.scss';
import React, { Component } from 'react';
import { Navigation, NavigationBanner } from 'vanilla-framework-react';

import AddStrip from '../components/add-strip';
import VomContainer from '../components/vom-container';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation>
          <NavigationBanner href="#" logo={{src: 'https://assets.ubuntu.com/v1/d96d86b5-vanilla_black-orange_hex.svg', alt: ''}} />
        </Navigation>
        <VomContainer type="6 | 6" />
        <AddStrip></AddStrip>
      </div>
    );
  }
}

