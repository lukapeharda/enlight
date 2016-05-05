import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import LoadingIndicator from './LoadingIndicator.jsx';

import ArticleMixin from '../mixins/article.js';
import TitleMixin from '../mixins/title.js';

import { fetchPage } from '../actions.js';

module.exports = React.createClass({
    mixins: [ArticleMixin, TitleMixin],

    getInitialState: function() {
        return {
            'page': []
        }
    },

    componentDidMount: function () {
        var that = this;

        if (enlight.bootstrap && enlight.bootstrap[this.props.slug]) {
            this.setState({
                page: enlight.bootstrap[this.props.slug]
            });
        } else {
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
        }
    },

    render: function() {
        if (this.state.page.length === 0) {
            return (
                <LoadingIndicator />
            );
        } else {
            var articleClass = "Article Article--" + this.getPostColor(this.state.page);
            return (
                <ReactCSSTransitionGroup component="div" transitionName="slide-in" transitionAppear={true} transitionAppearTimeout={200} transitionEnterTimeout={200} transitionLeaveTimeout={200}>
                    <article className={ articleClass } key={this.props.id}>
                        <header className="Article__header">
                            <h1 className="Article__title" dangerouslySetInnerHTML={ this.getTitle(this.state.page) } />
                        </header>
                        <div className="Article__content" dangerouslySetInnerHTML={ this.getContent(this.state.page) } />
                    </article>
                </ReactCSSTransitionGroup>
            );
        }
    }
});