<?php

function enlight_setup_theme()
{
    // Nav menus
    register_nav_menu('primary', __('Main Menu', 'enlight'));
}
add_action('after_setup_theme', 'enlight_setup_theme');

function enlight_enqueue_assets()
{
    // CSS files & fonts
    wp_enqueue_style('enlight-font', '//fonts.googleapis.com/css?family=Roboto:300&subset=latin,latin-ext');
    wp_enqueue_style('enlight-main', get_template_directory_uri() . '/assets/css/main.css');
    wp_enqueue_style('linearicons', '//cdn.linearicons.com/free/1.0.0/icon-font.min.css');

    // Scripts
    wp_enqueue_script('enlight-main', get_template_directory_uri() . '/assets/js/main.js', array(), false, true);
    wp_localize_script('enlight-main', 'enlight', array('endpoint' => home_url('wp-json')));
}
add_action('wp_enqueue_scripts', 'enlight_enqueue_assets');

function enlight_custom_permastructure()
{
    global $wp_rewrite;

    $wp_rewrite->page_structure = $wp_rewrite->root . 'page/%pagename%';
}
add_action('init', 'enlight_custom_permastructure');

/**
 * For post format link switch permalink with external link.
 *
 * @param WP_REST_Response   $response
 * @param WP_Post            $post
 * @param WP_REST_Request    $request
 * @return WP_REST_Response
 */
function enlight_post_format_rest_link($response, $post, $request)
{
    if (isset($response->data['format']) && 'link' === $response->data['format']) {
        $url = get_url_in_content($post->post_content);
        if ($url) {
            $response->data['link'] = $url;
        }
    }
    return $response;
}
add_filter('rest_prepare_post', 'enlight_post_format_rest_link', 10, 3);