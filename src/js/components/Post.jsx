import React from 'react';
import PostFormatIcon from './PostFormatIcon.jsx';
import Mixins from '../mixins.js';

module.exports = React.createClass({
    mixins: [Mixins],

    getInitialState: function() {
        return {
            post: this.props.post
        }
    },

    render: function() {
        var articleClass = "Post Post--" + this.getPostColor(this.state.post);

        return (
            <article className={ articleClass } key={this.props.id}>
                <header className="Post__header">
                    <h1 className="Post__title"><a className="Post__title__link" href={ this.getPermalink(this.state.post) } dangerouslySetInnerHTML={{ __html: this.state.post.title.rendered }} /></h1>
                    <div className="Post__meta">
                        <PostFormatIcon format={ this.getPostFormat(this.state.post) } />
                        <span className="lnr lnr-user Post__meta__author" dangerouslySetInnerHTML={ this.getAuthor(this.state.post) } />
                        <span className="lnr lnr-calendar-full Post__meta__date" dangerouslySetInnerHTML={ this.getDate(this.state.post) } />
                    </div>
                </header>
            </article>
        );
    }
});