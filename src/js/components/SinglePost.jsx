import React from 'react';
import { fetchPost } from '../actions.js';
import ArticleMixin from '../mixins/article.js';
import PostFormatIcon from './PostFormatIcon.jsx';
import LoadingIndicator from './LoadingIndicator.jsx';

module.exports = React.createClass({
    mixins: [ArticleMixin],

    getInitialState: function() {
        return {
            'post': []
        }
    },

    componentDidMount: function () {
        var that = this;
        fetchPost(this.props.slug).then(function (data) {
            that.setState({
                post: data[0]
            });
        }, function (error) {
            console.error(error);
        });
    },

    render: function() {
        if (this.state.post.length === 0) {
            return (
                <LoadingIndicator />
            );
        } else {
            var articleClass = "Article Article--" + this.getPostColor(this.state.post);

            return (
                <article className={ articleClass } key={this.props.id}>
                    <header className="Article__header">
                        <h1 className="Article__title" dangerouslySetInnerHTML={ this.getTitle(this.state.post) } />
                        <div className="Article__meta">
                            <PostFormatIcon format={ this.getPostFormat(this.state.post) } />
                            <span className="lnr lnr-user Article__meta__author" dangerouslySetInnerHTML={ this.getAuthor(this.state.post) } />
                            <span className="lnr lnr-calendar-full Article__meta__date" dangerouslySetInnerHTML={ this.getDate(this.state.post) } />
                        </div>
                    </header>
                    <div className="Article__content" dangerouslySetInnerHTML={ this.getContent(this.state.post) } />
                </article>
            );
        }
    }
});