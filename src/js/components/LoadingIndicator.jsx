import React from 'react';

module.exports = React.createClass({
    render: function() {
        return (
            <div className="LoadingIndicator">
                <img src={ enlight.loading } />
            </div>
        );
    }
});