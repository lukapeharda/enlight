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
        setCurrent = function(ev) {
            var item = ev.target.parentNode;
            if (item.classList.contains('current-menu-item')) {
                return false;
            }
            menu.querySelector('.current-menu-item').classList.remove('current-menu-item');
            item.classList.add('current-menu-item');
        };
    [].slice.call(menuItems).forEach(function(el) {
        el.addEventListener('click', setCurrent);
    });
});

var hamburgers = document.getElementsByClassName('hamburger');

for (var a = 0; a < hamburgers.length; a++) {
    hamburgers[a].addEventListener('click', function(event) {
        event.currentTarget.classList.toggle('is-active');
        document.getElementsByClassName('MainMenu')[0].classList.toggle('open');
    });
}
