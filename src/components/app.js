import React, { Component } from 'react';
import { Navigation, NavigationBanner, NavigationLink } from 'vanilla-framework-react';

import Home from '../components/home';
import AddStrip from '../components/add-strip';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation>
          <NavigationBanner href="#" logo={{src: "https://assets.ubuntu.com/v1/d96d86b5-vanilla_black-orange_hex.svg", alt: ""}} />
          <NavigationLink selected href="#" label="Link1" />
          <NavigationLink href="#" label="Link2" />
        </Navigation>
        <AddStrip></AddStrip>
      </div>
    );
  }
}
