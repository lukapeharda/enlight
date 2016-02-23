import React from 'react';
import Post from './Post.jsx';
import { fetchPosts } from '../actions.js';

module.exports = React.createClass({
    getInitialState: function() {
        return {
            'posts': []
        }
    },

    componentDidMount: function () {
        var that = this;
        fetchPosts().then(function (data) {
            that.setState({
                posts: data
            });
        }, function (error) {
            console.log(error);
        });
    },

    render: function() {
        if (this.state.posts.length === 0) {
            return <div>Loading posts...</div>;
        } else {
            var posts = this.state.posts.map(function(post) {
                return <Post key={post.id} title={post.title.rendered} content={post.content.rendered} />;
            });
            return (
                <div>
                    {posts}
                </div>);
        }
    }
});