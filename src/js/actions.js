import WP from 'wordpress-rest-api';

var wp = new WP({endpoint: enlight.endpoint});

export function fetchPosts() {
    return wp.posts().embed();
}

export function fetchPage(slug) {
    return wp.pages().path(slug);
}

export function fetchPost(slug) {
    return wp.posts().filter({
        post_name: slug
    }).embed();
}