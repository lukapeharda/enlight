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