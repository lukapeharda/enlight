import React from 'react';
import ReactDOM from 'react-dom';

module.exports = React.createClass({
    render: function() {
        return (
            <div className="LoadingIndicator" key="loading.1">
                <img src={ enlight.loading } />
            </div>
        );
    }
});