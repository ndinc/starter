<?php
function get_post_query($type="post", $num=10, $extra=null){
  switch($type){
    case 'custom-post':
      $args = array(
        'post_type' => 'custom-post',
        'posts_per_page' => $num,
      );
      break;
    default:
      $args = array(
        'post_type' => $type,
        'posts_per_page' => $num,
      );
  }
  if($extra){
    $args = array_merge($args, $extra);
  }
  return get_wp_query($args);
}

// <?php $wp_post_query = get_post_query('post', -1);
// <?php while ($wp_post_query->have_posts()) : $wp_post_query->the_post();
// <?php endwhile
