import React from 'react';
import ReactDOM from 'react-dom';

import Posts from './Posts.jsx';
import Page from './Page.jsx';
import SinglePost from './SinglePost.jsx';

let Controller = {
    init: function(context, next) {
        if (context.params && context.params[0]) {
            context.currentPage = parseInt(context.params[0]);
        } else {
            context.currentPage = 1;
        }
        next(context);
    },
    posts: function(context) {
        ReactDOM.render(<Posts page={ context.currentPage } />, document.getElementById('app'));
    },
    page: function(context) {
        ReactDOM.render(<Page slug={ context.params.slug } />, document.getElementById('app'));
    },
    post: function(context) {
        ReactDOM.render(<SinglePost slug={ context.params.slug } />, document.getElementById('app'));
    }
};

export default Controller;