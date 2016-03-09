import WP from 'wordpress-rest-api';

var wp = new WP({endpoint: enlight.endpoint});

export function fetchPosts(page) {
    return wp.posts().page(page).embed();
}

export function fetchPage(slug) {
    return wp.pages().path(slug);
}

export function fetchPost(slug) {
    return wp.posts().name(slug).embed();
}