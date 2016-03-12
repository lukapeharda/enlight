import React from 'react';
import PostFormatIcon from './PostFormatIcon.jsx';
import ArticleMixin from '../mixins/article.js';

module.exports = React.createClass({
    mixins: [ArticleMixin],

    getInitialState: function() {
        return {
            post: this.props.post
        }
    },

    render: function() {
        var articleClass = "Article Article--" + this.getPostColor(this.state.post);

        return (
            <article className={ articleClass } key={this.props.id}>
                <header className="Article__header">
                    <h1 className="Article__title">
                        <a className="Article__title__link" href={ this.getPermalink(this.state.post) } dangerouslySetInnerHTML={{ __html: this.state.post.title.rendered }} />
                    </h1>
                    <div className="Article__meta">
                        <PostFormatIcon format={ this.getPostFormat(this.state.post) } />
                        <span className="lnr lnr-user Article__meta__author" dangerouslySetInnerHTML={ this.getAuthor(this.state.post) } />
                        <span className="lnr lnr-calendar-full Article__meta__date" dangerouslySetInnerHTML={ this.getDate(this.state.post) } />
                    </div>
                </header>
            </article>
        );
    }
});