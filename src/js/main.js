/*
 * Controller
 */
import Controller from './components/Controller.jsx';

/*
 * Router
 */
import page from 'page';

page(/^\/$|^\/page\/([0-9])+/, Controller.init, Controller.posts);
page('/post/:slug', Controller.init, Controller.post);
page('/page/:slug', Controller.init, Controller.page);

page.start();

/*
 * Polyfills
 */
import './polyfills/classlist.js';

[].slice.call(document.querySelectorAll('.MainMenu')).forEach(function(menu) {
    var menuItems = menu.querySelectorAll('.menu-item'),
        closeMenu = function(ev) {
            menu.classList.remove('open');
            menu.previousElementSibling.classList.remove('is-active');
        };
    [].slice.call(menuItems).forEach(function(el) {
        el.addEventListener('click', closeMenu);
    });
});

[].slice.call(document.querySelectorAll('.hamburger')).forEach(function(hamburger) {
    hamburger.addEventListener('click', function(event) {
        event.currentTarget.classList.toggle('is-active');
        document.getElementsByClassName('MainMenu')[0].classList.toggle('open');
    });
});