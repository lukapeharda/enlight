import React from 'react';
import { fetchPost } from '../actions.js';
import Mixins from '../mixins.js';
import PostFormatIcon from './PostFormatIcon.jsx';
import LoadingIndicator from './LoadingIndicator.jsx';

module.exports = React.createClass({
    mixins: [Mixins],

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
            var articleClass = "Post Post--" + this.getPostColor(this.state.post);

            return (
                <article className={ articleClass } key={this.props.id}>
                    <header className="Post__header">
                        <h1 className="Post__title" dangerouslySetInnerHTML={ this.getTitle(this.state.post) } />
                        <div className="Post__meta">
                            <PostFormatIcon format={ this.getPostFormat(this.state.post) } />
                            <span className="lnr lnr-user Post__meta__author" dangerouslySetInnerHTML={ this.getAuthor(this.state.post) } />
                            <span className="lnr lnr-calendar-full Post__meta__date" dangerouslySetInnerHTML={ this.getDate(this.state.post) } />
                        </div>
                    </header>
                    <div className="Post__content" dangerouslySetInnerHTML={ this.getContent(this.state.post) } />
                </article>
            );
        }
    }
});