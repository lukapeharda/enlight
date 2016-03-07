<?php

function enlight_render_visual_preferences_menu_fields($id, $item, $depth, $args)
{
    $highlightColor = get_post_meta($item->ID, 'enlight_highlight_color', true);
    ?>
        <p class="description description-wide field-highlight-color">
            <label for="enlight_highlight_color">
                <?php _e('Highlight Color', 'enlight'); ?><br />
                <select name="enlight_highlight_color[<?php echo $item->ID; ?>]" class="widefat edit-enlight-highlight-color-<?php echo $item->ID; ?>">
                    <?php foreach (enlight_get_colors() as $name => $color) : ?>
                        <option value="<?php echo esc_attr($name); ?>"<?php selected($name, $highlightColor); ?> style="color: <?php echo $color; ?>"><?php echo $name; ?></option>
                    <?php endforeach; ?>
                </select>
            </label>
        </p>
    <?php
}
add_action('wp_nav_menu_item_custom_fields', 'enlight_render_visual_preferences_menu_fields', 10, 4);

function enlight_visual_preferences_menu_columns($columns)
{
    $columns['enlight_highlight_color'] = __('Highlight Color', 'enlight');

    return $columns;
}
add_filter('manage_nav-menus_columns', 'enlight_visual_preferences_menu_columns', 99);

function enlight_save_visual_preferences_menu_fields($menuId, $menuItemDbId, $menuItemArgs)
{
    if (defined('DOING_AJAX') && DOING_AJAX) {
        return;
    }

    check_admin_referer('update-nav_menu', 'update-nav-menu-nonce');

    if (isset($_POST['enlight_highlight_color'][$menuItemDbId])) {
        update_post_meta($menuItemDbId, 'enlight_highlight_color', sanitize_text_field($_POST['enlight_highlight_color'][$menuItemDbId]));
    }
}
add_action('wp_update_nav_menu_item', 'enlight_save_visual_preferences_menu_fields', 10, 3);

function enlight_nav_menu_css_class($classes, $item, $args)
{
    if ($args->menu === 'primary') {
        $highlightColor = get_post_meta($item->ID, 'enlight_highlight_color', true);

        if (! empty($highlightColor)) {
            $classes[] = 'MainMenu__item';
            $classes[] = 'MainMenu__item--' . $highlightColor;
        }
    }

    return $classes;
}
add_filter('nav_menu_css_class', 'enlight_nav_menu_css_class', 10, 3);