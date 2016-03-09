import React from 'react';
import { fetchPage } from '../actions.js';
import Mixins from '../mixins.js';
import LoadingIndicator from './LoadingIndicator.jsx';

module.exports = React.createClass({
    mixins: [Mixins],

    getInitialState: function() {
        return {
            'page': []
        }
    },

    componentDidMount: function () {
        var that = this;
        fetchPage(this.props.slug).then(function (data) {
            that.setState({
                page: data[0]
            });
        }, function (error) {
            console.error(error);
        });
    },

    render: function() {
        if (this.state.page.length === 0) {
            return (
                <LoadingIndicator />
            );
        } else {
            var pageClass = "Page Page--" + this.getPostColor(this.state.page);
            return (

                <article className={ pageClass } key={this.props.id}>
                    <header className="Page__header">
                        <h1 className="Page__title" dangerouslySetInnerHTML={ this.getTitle(this.state.page) } />
                    </header>
                    <div className="Page__content" dangerouslySetInnerHTML={ this.getContent(this.state.page) } />
                </article>
            );
        }
    }
});