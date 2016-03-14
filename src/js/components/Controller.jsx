import React from 'react';
import ReactDOM from 'react-dom';

import Posts from './Posts.jsx';
import Page from './Page.jsx';
import SinglePost from './SinglePost.jsx';

let Controller = {
    init: function(context, next) {
        // Select current menu item
        [].slice.call(document.querySelectorAll('li.current-menu-item')).forEach(function(currentItem) {
            currentItem.classList.remove('current-menu-item');
        });
        [].slice.call(document.querySelectorAll('a[href="' + enlight.baseurl + context.pathname.substring(1) + '"]')).forEach(function(currentItem) {
            currentItem.parentElement.classList.add('current-menu-item');
        });

        // Pagination
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