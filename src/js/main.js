import React from 'react';
import ReactDOM from 'react-dom';

// import App from './components/App.jsx';
import About from './components/About.jsx';
import Posts from './components/Posts.jsx';
import Page from './components/Page.jsx';
import SinglePost from './components/SinglePost.jsx';

/*
 * Router
 */
import page from 'page';

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

/*
 * Main menu
 */
import classie from './utils/classie.js';

[].slice.call(document.querySelectorAll('.MainMenu')).forEach(function(menu) {
    var menuItems = menu.querySelectorAll('.menu-item'),
        setCurrent = function(ev) {
            var item = ev.target.parentNode;
            if (classie.hasClass(item, 'current-menu-item')) {
                return false;
            }
            classie.removeClass(menu.querySelector('.current-menu-item'), 'current-menu-item');
            classie.addClass(item, 'current-menu-item');
        };
    [].slice.call(menuItems).forEach(function(el) {
        el.addEventListener('click', setCurrent);
    });
});