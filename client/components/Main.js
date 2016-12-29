// TODO: cleanup

// Main is really just a presentational component
import React from 'react';
import {Link} from 'react-router';

// {React.cloneElement(this.props.children, this.props)}:
// - passes down props from Main to its first child
const Main = React.createClass({
  render() {
    return (
      <div>
        <header className="header">
          <div className="container">
            <Link onClick={this.props.clickedLogo} to="/"><span className="header--logo">Haroldline</span></Link>
            <nav className="header--navigation">
              <Link onClick={this.props.clickedLogo} className="header--nav-item" to="/">News</Link>
              <a className="header--nav-item" href="#">Events</a>
            </nav>
          </div>
        </header>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;
