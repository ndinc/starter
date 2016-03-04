<!DOCTYPE html>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="ja"><![endif]-->
<!--[if IE 7]>   <html class="no-js lt-ie9 lt-ie8" lang="ja"><![endif]-->
<!--[if IE 8]>   <html class="no-js lt-ie9" lang="ja"><![endif]-->
<!--[if gt IE 8]><!--><html lang="ja"><!--<![endif]-->
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title><?php echo get_head_meta('title'); ?></title>
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="description" content="<?php echo get_head_meta('description'); ?>">
  <meta name="keywords" content="<?php echo get_head_meta('keywords'); ?>">
  <?php include 'includes/ogp.php' ?>
  <link rel="apple-touch-icon" href="<?php site_path('template_url'); ?>/images/apple-icon-precomposed.png">
  <link rel="shortcut icon" type="image/x-icon" href="<?php site_path('template_url'); ?>/images/favicon.ico">
  <link rel="stylesheet" href="<?php echo assets_path("stylesheets/foundation.css") ?>">
  <link rel="stylesheet" href="<?php echo assets_path("stylesheets/app.css") ?>">
  <!--[if lt IE 9]>
    <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.6.2/html5shiv.js"></script>
    <script src="//s3.amazonaws.com/nwapi/nwmatcher/nwmatcher-1.2.5-min.js"></script>
    <script src="//html5base.googlecode.com/svn-history/r38/trunk/js/selectivizr-1.0.3b.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
    <script src="//api.ndinc.jp/javascripts/rem.min.js" type="text/javascript"></script>
  <![endif]-->
  <?php if (function_exists('wp_head')) wp_head(); ?>
</head>
<body <?php echo body_class(); ?> data-page-id="home">
  <div id="container" class="">
  <?php
  $routing_path = get_routing_path();
  include "sections/header.php";
  include $routing_path;
  include "sections/footer.php"; ?>
  </div>
  <div id="fb-root"></div>
  <!--[if lt IE 9]>
    <script src="//cdnjs.cloudflare.com/ajax/libs/css3pie/2.0beta1/PIE_IE678.js"></script>
  <![endif]-->
  <!--[if IE 9]>
    <script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/css3pie/2.0beta1/PIE_IE9.js"></script>
  <![endif]-->
  <script src="<?php echo assets_path("javascripts/shared.js") ?>"></script>
  <script src="<?php echo assets_path("javascripts/app.js") ?>"></script>
  <?php include 'includes/social_scripts.php' ?>
  <?php if (function_exists('wp_footer')) wp_footer(); ?>
</body>
</html>
