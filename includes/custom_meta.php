<?php

/**
 * Register theme post meta boxes.
 *
 * @param  string $postType
 * @param  WP_Post $post
 * @return void
 */
function enlight_post_meta_boxes($postType, $post)
{
    add_meta_box(
        'enlight-visual-preferences',
        __('Visual Preferences', 'enlight'),
        'enlight_render_visual_preferences_meta_box',
        apply_filters('enlight/visual_preferences_screen', array('post', 'page')),
        'side',
        'low'
    );
}
add_action('add_meta_boxes', 'enlight_post_meta_boxes', 10, 2);

/**
 * Render "Visual Preferences" meta box.
 *
 * @param  WP_Post $post
 * @return void
 */
function enlight_render_visual_preferences_meta_box($post)
{
    $highlightColor = get_post_meta($post->ID, 'enlight_highlight_color', true);
?>
    <p>
        <strong><?php _e('Highlight Color', 'enlight'); ?></strong>
    </p>
    <p>
        <select name="enlight_highlight_color">
            <?php foreach (enlight_get_colors() as $name => $color) : ?>
                <option value="<?php echo esc_attr($name); ?>"<?php selected($name, $highlightColor); ?> style="color: <?php echo $color; ?>"><?php echo $name; ?></option>
            <?php endforeach; ?>
        </select>
    </p>
<?php
}

/**
 * Save custom post meta boxes fields.
 *
 * @param  integer $postId
 * @return void
 */
function enlight_save_post_meta_boxes($postId)
{
    if (! current_user_can('edit_page', $postId)) {
        return;
    }

    if (isset($_POST['enlight_highlight_color'])) {
        update_post_meta($postId, 'enlight_highlight_color', sanitize_text_field($_POST['enlight_highlight_color']));
    }
}
add_action('save_post', 'enlight_save_post_meta_boxes');

/**
 * Register API custom post meta fields (fields that will be returned through the API).
 *
 * @return void
 */
function enlight_register_api_post_meta()
{
    register_rest_field(
        apply_filters('enlight/visual_preferences_screen', array('post', 'page')),
        'highlight_color',
        array(
            'get_callback'      => 'enlight_get_api_post_meta',
            'update_callback'   => null,
            'schema'            => null
        )
    );
}
add_action('rest_api_init', 'enlight_register_api_post_meta');

/**
 * Return API custom post meta field value.
 *
 * @param  array $object
 * @param  string $field
 * @param  WP_REST_Request $request
 * @return string
 */
function enlight_get_api_post_meta($object, $field, $request)
{
    return get_post_meta($object['id'], 'enlight_' . $field, true);
}