import React from 'react';

export default class VomContainer extends React.Component {
  constructor(props) {
    super(props);
    this.VOM = [];
    this.emitter = props.emitter;
    this.emitter.addListener('CREATE_COMPONENT', payload => {
      this.VOM.push(payload);
      this.forceUpdate();
    });
  }

  render() {
    return (
      <div>
        {this.VOM.map((component, key) => <div key={key}>{component}</div>)}
      </div>
    );
  }
}
