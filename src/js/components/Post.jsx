import React from 'react';

module.exports = React.createClass({
    render: function() {
        return (
            <div key={this.props.id}>
                <h1>{this.props.title}</h1>
                <div>{this.props.content}</div>
            </div>
        );
    }
});