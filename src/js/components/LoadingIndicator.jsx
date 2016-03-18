import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

module.exports = React.createClass({
    render: function() {
        return (
            <ReactCSSTransitionGroup component="div" transitionName="slide-in" transitionAppear={true} transitionAppearTimeout={200} transitionEnterTimeout={200} transitionLeaveTimeout={200}>
                <div className="LoadingIndicator" key="loading.1">
                    <img src={ enlight.loading } />
                </div>
            </ReactCSSTransitionGroup>
        );
    }
});