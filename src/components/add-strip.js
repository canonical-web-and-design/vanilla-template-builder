import React from 'react';
import { Strip, StripRow, Button, ContextualMenu, ContextualMenuDropdown, Link } from 'vanilla-framework-react';

export default class AddStrip extends React.Component {
  constructor(props) {
    super(props);
    this.stripLayout = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.emitter = props.emitter;
  }

  handleClick(type) {
    let component;
    switch (type) {
      case 'strip-6-6': {
        component = (
          <Strip bordered>
            <StripRow>
              <div className="col-6">
                <h2>In partnership with Google GKE</h2>
                <p>Google and Canonical together enable smooth hybrid operations between Google’s Container Engine (GKE) service with Ubuntu worker nodes, and Canonical’s Distribution of Kubernetes®*. Choose Canonical’s Kubernetes to be sure your container workloads can migrate to GKE thanks to our kernel-to-k8s alignment.</p>
                <p><a href="">Try GKE with Ubuntu now ›</a></p>
              </div>
              <div className="col-6">
                <img src="https://assets.ubuntu.com/v1/ba70dd8a-gce.png?w=380" alt="Google Container Engine" />
              </div>
            </StripRow>
          </Strip>
        );
        break;
      }
      case 'strip-8-4': {
        component = (
          <Strip bordered>
            <StripRow>
              <div className="col-8">
                <h2>Complete</h2>
                <p>Ubuntu comes with everything you need to run your organisation, school, home or enterprise. All the essential applications, like an office suite, browsers, email and media apps come pre-installed and thousands more games and applications are available in the Ubuntu Software Centre.</p>
                <p><a href="">Explore features ›</a></p>
              </div>
              <div className="col-4">
                <img src="https://assets.ubuntu.com/v1/3a05fc34-Dell_XPS_Laptop_Front-news.png" alt="Google Container Engine" />
              </div>
            </StripRow>
          </Strip>
        );
        break;
      }
      case 'strip-4-8': {
        component = (
          <Strip bordered>
            <StripRow>
              <div className="col-4">
                <img src="https://assets.ubuntu.com/v1/d9105909-Dell_XPS_Laptop_Left-Desktop.png" alt="Google Container Engine" />
              </div>
              <div className="col-8">
                <h2>Available on a huge range of hardware</h2>
                <p>Canonical works with the world’s leading computer manufacturers to certify that Ubuntu works on a huge range of devices. It means that Ubuntu is now available at thousands of retailers across China, India, South East Asia and Latin America.</p>
                <p><a href="">Find out more about our partners</a></p>
              </div>
            </StripRow>
          </Strip>
        );
        break;
      }
      case 'strip-4-4-4': {
        component = (
          <Strip bordered>
            <StripRow>
              <div className="col-4">
                <h3>Open source</h3>
                <p>Ubuntu has always been free to download, use and share. We believe in the power of open source software; Ubuntu could not exist without its worldwide community of voluntary developers.</p>
              </div>
              <div className="col-4">
                <h3>Secure</h3>
                <p>With a built-in firewall and virus protection software, Ubuntu is one of the most secure operating systems around. And the long-term support releases give you five years of security patches and updates.</p>
              </div>
              <div className="col-4">
                <h3>Accessible</h3>
                <p>Computing is for everyone regardless of nationality, gender or disability. Ubuntu is fully translated into over 50 languages and includes essential assistive technologies.</p>
              </div>
            </StripRow>
          </Strip>
        );
        break;
      }
      default: {
        component = undefined;
      }
    }
    if (component) {
      this.emitter.emit('CREATE_COMPONENT', component);
    }
  }

  render() {

    return (
      <div className="p-strip--ghost">
        <div className="row u-align--center">
          <ContextualMenu id="menu" className="u-no-margin--bottom">
            <Button neutral>
              <i className="p-icon--plus"></i> Create strip
            </Button>
            <ContextualMenuDropdown>
              <Link href="#create-strip/6-6" ref="6-6" onClick={() => this.handleClick('strip-6-6')}>
                6 col | 6 col
              </Link>
              <Link href="#create-strip/8-4" ref="8-4" onClick={() => this.handleClick('strip-8-4')}>
                8 col | 4 col
              </Link>
              <Link href="#create-strip/4-8" ref="4-8" onClick={() => this.handleClick('strip-4-8')}>
                4 col | 8 col
              </Link>
              <Link href="#create-strip/4-4-4" ref="4-4-4" onClick={() => this.handleClick('strip-4-4-4')}>
                4 col | 4 col | 4 col
              </Link>
            </ContextualMenuDropdown>
          </ContextualMenu>
        </div>
      </div>
    );
  }
}
