import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Post from './Post.jsx';
import LoadingIndicator from './LoadingIndicator.jsx';
import Pagination from './Pagination.jsx';

import TitleMixin from '../mixins/title.js';

import { fetchPosts } from '../actions.js';

module.exports = React.createClass({
    mixins: [TitleMixin],

    getInitialState: function() {
        return {
            'posts': [],
            'next': false,
            'prev': false,
        }
    },

    componentDidMount: function () {
        var that = this;
        fetchPosts(this.props.page).then(function(data) {
            that.setState({
                posts: data,
                next: data._paging && data._paging.next,
                prev: data._paging && data._paging.prev,
            });
            return data[0];
        }).then(function() {
            that.setTitle();
        }).catch(function (error) {
            console.error(error);
        });
    },

    componentDidUpdate: function(prevProps) {
        if (prevProps.page !== this.props.page) {
            // Reset to initial to trigger loading
            this.setState(this.getInitialState());

            this.componentDidMount();
        }
    },

    render: function() {
        if (this.state.posts.length === 0) {
            return (
                <LoadingIndicator />
            );
        } else {
            var posts = this.state.posts.map(function(post) {
                return <Post key={ post.id } post={ post } />;
            });
            return (
                <ReactCSSTransitionGroup component="div" className="Posts" transitionName="slide-in" transitionAppear={true} transitionAppearTimeout={200} transitionEnterTimeout={200} transitionLeaveTimeout={200}>
                    {posts}
                    <Pagination current={ this.props.page } prev={ this.state.prev } next={ this.state.next }/>
                </ReactCSSTransitionGroup>
            );
        }
    }
});