  <meta property="og:title" content="<?php echo get_head_meta('og:title','ogp'); ?>">
  <meta property="og:description" content="<?php echo get_head_meta('og:description','ogp'); ?>">
  <meta property="og:url" content="<?php echo get_head_meta('og:url','ogp'); ?>">
  <meta property="og:image" content="<?php echo get_head_meta('og:image','ogp'); ?>">
  <meta property="og:site_name" content="<?php echo get_head_meta('og:site_name','ogp'); ?>">
  <meta property="og:type" content="<?php echo get_head_meta('og:type','ogp'); ?>">
  <meta name="twitter:card" content="<?php echo get_head_meta('twitter:card'); ?>">
  <?php $twitter_account = get_head_meta('twitter:site'); ?>
  <?php if ($twitter_account): ?>
  <meta name="twitter:site" content="<?php echo $twitter_account; ?>">
  <meta name="twitter:title" content="<?php echo get_head_meta('twitter:title'); ?>">
  <meta name="twitter:description" content="<?php echo get_head_meta('twitter:description'); ?>">
  <meta name="twitter:image:src" content="<?php echo get_head_meta('twitter:image:src'); ?>">
  <?php endif ?>
