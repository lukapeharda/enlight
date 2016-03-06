import React from 'react';
import { Link } from 'react-router';


module.exports = React.createClass({
  render: function() {
    return (
        <div>
            <h1>App</h1>
            <hr/>
            <a href="/">Posts</a>
            <a href="http://lukapeharda.local/about">About 2</a>
            <a href="/about">About 3</a>
            <hr/>
            {this.props.children}
        </div>
    );
  }
});