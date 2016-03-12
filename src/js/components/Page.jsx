import React from 'react';
import { fetchPage } from '../actions.js';
import ArticleMixin from '../mixins/article.js';
import LoadingIndicator from './LoadingIndicator.jsx';

module.exports = React.createClass({
    mixins: [ArticleMixin],

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
            var articleClass = "Article Article--" + this.getPostColor(this.state.page);
            return (

                <article className={ articleClass } key={this.props.id}>
                    <header className="Article__header">
                        <h1 className="Article__title" dangerouslySetInnerHTML={ this.getTitle(this.state.page) } />
                    </header>
                    <div className="Article__content" dangerouslySetInnerHTML={ this.getContent(this.state.page) } />
                </article>
            );
        }
    }
});