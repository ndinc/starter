  <meta property="og:title" content="<?php echo get_head_meta('title'); ?>">
  <meta property="og:description" content="<?php echo get_head_meta('description'); ?>">
  <meta property="og:url" content="<?php echo get_head_meta('url'); ?>">
  <meta property="og:image" content="<?php echo get_head_meta('image'); ?>">
  <meta property="og:site_name" content="<?php echo get_head_meta('site_name'); ?>">
  <meta property="og:type" content="<?php echo get_head_meta('type'); ?>">

  <meta name="twitter:card" content="summary_large_image">
  <?php $twitter_account = get_head_meta('twitter_account'); ?>
  <?php if ($twitter_account): ?>
  <meta name="twitter:site" content="<?php echo $twitter_account; ?>">
  <meta name="twitter:title" content="<?php echo get_head_meta('title'); ?>">
  <meta name="twitter:description" content="<?php echo get_head_meta('description'); ?>">
  <meta name="twitter:image:src" content="<?php echo get_head_meta('image'); ?>">
  <meta name="twitter:domain" content="<?php echo get_head_meta('url'); ?>">
  <?php endif ?>
