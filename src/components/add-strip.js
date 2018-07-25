import React from 'react';
import { Button, ContextualMenu, ContextualMenuDropdown, Link } from 'vanilla-framework-react';

export default class AddStrip extends React.Component {
  constructor() {
    super();
    this.stripLayout = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(type) {
    console.log(type);
    this.setState({'type': type});
  }

  render() {
    return (
      <div className="p-strip--ghost">
        <div className="row u-align--center">
          <ContextualMenu id="menu" className="u-no-margin--bottom">
            <Button neutral>
              <i className="i-icon--plus is-light"></i> Create strip
            </Button>
            <ContextualMenuDropdown>
              <Link href="#create-strip/6-6" ref="6-6" onClick={() => this.handleClick('6-6')}>
                6 col | 6 col
              </Link>
              <Link href="#create-strip/8-4" ref="8-4" onClick={() => this.handleClick('8-4')}>
                8 col | 4 col
              </Link>
              <Link href="#create-strip/4-8" ref="4-8" onClick={() => this.handleClick('4-8')}>
                4 col | 8 col
              </Link>
            </ContextualMenuDropdown>
          </ContextualMenu>
        </div>
      </div>
    );
  }
}
