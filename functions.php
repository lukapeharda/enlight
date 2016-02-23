<?php

function enlight_enqueue_assets()
{
    // CSS files & fonts
    wp_enqueue_style('enlight-font', '//fonts.googleapis.com/css?family=Roboto:300&subset=latin,latin-ext');
    wp_enqueue_style('enlight-main', get_template_directory_uri() . '/assets/css/main.css');

    // Scripts
    wp_enqueue_script('enlight-main', get_template_directory_uri() . '/assets/js/main.js', array(), false, true);
    wp_localize_script('enlight-main', 'enlight', array('endpoint' => home_url('wp-json')));
}
add_action('wp_enqueue_scripts', 'enlight_enqueue_assets');