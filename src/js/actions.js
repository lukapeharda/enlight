import WP from 'wordpress-rest-api';

var wp = new WP({endpoint: enlight.endpoint});

export function fetchPosts() {
    return wp.posts();
}