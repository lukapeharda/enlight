import React from 'react';
import { fetchPage } from '../actions.js';
import ArticleMixin from '../mixins/article.js';
import TitleMixin from '../mixins/title.js';
import LoadingIndicator from './LoadingIndicator.jsx';

module.exports = React.createClass({
    mixins: [ArticleMixin, TitleMixin],

    getInitialState: function() {
        return {
            'page': []
        }
    },

    componentDidMount: function () {
        var that = this;
        fetchPage(this.props.slug).then(function(data) {
            that.setState({
                page: data[0]
            });
            return data[0];
        }).then(function(page) {
            that.setTitle(page);
        }).catch(function (error) {
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