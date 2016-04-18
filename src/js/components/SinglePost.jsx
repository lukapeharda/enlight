import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import PostFormatIcon from './PostFormatIcon.jsx';
import LoadingIndicator from './LoadingIndicator.jsx';

import ArticleMixin from '../mixins/article.js';
import TitleMixin from '../mixins/title.js';

import { fetchPost } from '../actions.js';

module.exports = React.createClass({
    mixins: [ArticleMixin, TitleMixin],

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
            return data[0];
        }).then(function(post) {
            that.setTitle(post);
        }).catch(function (error) {
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
                <ReactCSSTransitionGroup component="div" transitionName="slide-in" transitionAppear={true} transitionAppearTimeout={200} transitionEnterTimeout={200} transitionLeaveTimeout={200}>
                    <article className={ articleClass } key={this.props.id}>
                        <header className="Article__header">
                            <h1 className="Article__title" dangerouslySetInnerHTML={ this.getTitle(this.state.post) } />
                            <div className="Article__meta">
                                <PostFormatIcon format={ this.getPostFormat(this.state.post) } />
                                <span className="Article__meta__author" dangerouslySetInnerHTML={ this.getAuthor(this.state.post) } />
                                <span className="Article__meta__date" dangerouslySetInnerHTML={ this.getDate(this.state.post) } />
                            </div>
                        </header>
                        <div className="Article__content" dangerouslySetInnerHTML={ this.getContent(this.state.post) } />
                    </article>
                </ReactCSSTransitionGroup>
            );
        }
    }
});