<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

    <header class="Header">
        <h1 class="Logo">
            <a href="<?php bloginfo('siteurl'); ?>" class="Logo__link">
                <img class="Logo__image" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/lp-logo.png">
                <span class="Logo__text">lukapeharda.com</span>
            </a>
        </h1>
        <nav class="Header__nav">
            <button class="hamburger hamburger--3dx" type="button">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
            <?php wp_nav_menu(array('menu' => 'primary', 'depth' => 1, 'container' => false, 'menu_class' => 'MainMenu')); ?>
        </nav>
    </header>

    <main id="app"></main>

    <footer class="Footer">
        <p class="Copyright">
            &copy; <?php echo date('Y'); ?> Luka Peharda
        </p>
    </footer>

    <?php wp_footer(); ?>
</body>
</html>