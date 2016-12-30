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
          <h1>My App</h1>
        </header>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;
