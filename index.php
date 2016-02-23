<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php wp_title( '|', true, 'right' ); ?></title>
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

    <header>
        <h1 class="Logo">
            <a href="#" class="Logo__link">
                <img class="Logo_img" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/lp-logo.png">
                <span class="Logo__text">lukapeharda.com</span>
            </a>
        </h1>
        <nav>
            Navigation goes here
        </nav>
    </header>

    <main>
        <div id="app">
        </div>
    </main>

    <footer>
    </footer>

    <?php wp_footer(); ?>
</body>
</html>