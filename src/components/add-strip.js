import React from 'react';
import { Button } from 'vanilla-framework-react';

export default class AddStrip extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log('Clicked');
  }

  render() {
    return (
      <div className="p-strip--ghost">
        <div className="row u-align--center">
          <Button positive onClick={this.handleClick} className="u-no-margin--bottom">Create strip</Button>
        </div>
      </div>
    );
  }
}
