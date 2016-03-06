import React from 'react';
import ReactDOM from 'react-dom';

import page from 'page';

// import App from './components/App.jsx';
import About from './components/About.jsx';
import Posts from './components/Posts.jsx';
import Page from './components/Page.jsx';
import SinglePost from './components/SinglePost.jsx';

page('/', function(context, next) {
    ReactDOM.render(<Posts />, document.getElementById('app'));
});
page('/post/:slug', function(context, next) {
    ReactDOM.render(<SinglePost slug={ context.params.slug } />, document.getElementById('app'));
});
page('/page/:slug', function(context, next) {
    ReactDOM.render(<Page slug={ context.params.slug } />, document.getElementById('app'));
});

page.start();