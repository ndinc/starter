<?php
function get_wp_query($args=null){
  global $wp_query;
  global $wp_post_count;
  $wp_post_count = -1;
  if(!$args) return $wp_query;
  $wp_temp_query = new WP_Query();
  $wp_temp_query->query($args);
  return $wp_temp_query;
}

function set_theme_locale(){
  session_start();
  global $locale;
  if (!isset($_SESSION['locale'])) {
    $_SESSION['locale'] = $locale;
  } else if (isset( $_GET['locale']) ){
    $locale = $_GET['locale'];
    $_SESSION['locale'] = $_GET['locale'];
  }
}

function get_page_slug(){
  global $post;
  $slug = is_home()? 'index' : get_query_var('name');
  return $slug;
}


function assets_path($path){
  global $_DATA;
  $rev = $_DATA['rev'];
  if(isset($rev[$path])){
    return get_site_path('template_url'). '/assets/'. $rev[$path];
  }else{
    return get_site_path('template_url'). '/assets/'. $path;
  }
}

function get_site_path($type = 'url'){
  if($type == 'directory_url'){
    return get_template_directory();
  }elseif($type == 'template_url'){
    return get_bloginfo('template_url');
  }else{
    return get_bloginfo($type);
  }
}

function site_path($type = 'url'){
  echo get_site_path($type);
}

function is_static(){
  $page_path = get_static_file_path();
  return file_exists($page_path);
}

function get_static_file_path(){
  $filepath = get_req_path();
  $page_path = get_theme_dir().'/templates/pages/' . $filepath . '.php';
  return $page_path;
}


function is_subpage() {
  global $post;                                 // load details about this page
    if ( is_page() && $post->post_parent ) {      // test to see if the page has a parent
           $parentID = $post->post_parent;

                   // the ID of the parent is this
           return $parentID;                      // return the ID
    } else {                                      // there is no parent so...
           return false;                          // ...the answer to the question is false
    };
};


function get_post_main_desc($post_id){
  $desc = null;
  $desc = get_the_excerpt();
  return apply_filters('get_post_main_desc', $desc);
;
}

function get_post_main_image($post_id, $size='full'){
  $src = null;
  $main_thumb_id = get_post_meta($post_id, 'main_thumb', true);
  $eyecatch_thumb_id = get_post_thumbnail_id($post_id);
  if($main_thumb_id && is_numeric($main_thumb_id)){
    $image = wp_get_attachment_image_src( $main_thumb_id, $size );
    $src = $image[0];
  }else if($eyecatch_thumb_id){
    $image = wp_get_attachment_image_src( $eyecatch_thumb_id, $size );
    $src = $image[0];
  }else{
    global $post;
    $src = get_the_post_image($post->ID, $size);
  }
  return apply_filters('get_post_main_image', $src);
}

function page_navi($my_query) {
  global $paged;
  global $wp_rewrite;
  $paginate_base = get_pagenum_link(1);
  if (strpos($paginate_base, '?') || ! $wp_rewrite->using_permalinks()) {
      $paginate_format = '';
      $paginate_base = add_query_arg('paged', '%#%');
  } else {
      $paginate_format = (substr($paginate_base, -1 ,1) == '/' ? '' : '/') .
      user_trailingslashit('page/%#%/', 'paged');;
      $paginate_base .= '%_%';
  }
  echo paginate_links( array(
      'base' => $paginate_base,
      'format' => $paginate_format,
      'total' => $my_query->max_num_pages,
      'mid_size' => 5,
      'current' => ($paged ? $paged : 1),
      'prev_text'    => __('Previous'),
      'next_text'    => __('Next '),
  ));
}

function the_post_image($post_id, $size, $order=0) {
  echo get_the_post_image($post_id, $size, $order, $max);
}

function get_the_post_image($post_id, $size, $order=0) {
  if (!is_array($size) and is_numeric($size)) {
    $size = array($size, $size);
  }
  $attachments = get_posts(array(
   'post_type' => 'attachment',
   'numberposts' => 1,
   'post_status' => null,
   'post_parent' => $post_id
  ));
  if (empty($attachments) ) return null;
  $attachment = $attachments[$order];
  $attachment_image = wp_get_attachment_image_src($attachment->ID, $size);
  return $attachment_image[0];
}

function get_the_crop_image($url, $crop, $size){
  $url = urlencode($url);
  $output = get_bloginfo('template_url').'/thumbnail.php?image='.$url.'&crop='.$crop.'&size='.$size;
  return $output;
}

function get_next_paging_href($wp_post_query){
  global $paged;
  global $wp_query;

  if (empty($paged)){
    $paged = 1;
  }
  if(empty($wp_post_query)){
    $wp_post_query = $wp_query;
  }
  $next_paged = $paged + 1;
  return ($wp_post_query->max_num_pages >= $next_paged)? get_pagenum_link($next_paged) : '';
}

function get_prev_paging_href($wp_post_query){
  global $paged;
  global $wp_query;

  if (empty($paged)){
    $paged = 1;
  }
  if(empty($wp_post_query)){
    $wp_post_query = $wp_query;
  }
  $next_paged = $paged - 1;
  return (0 < $next_paged)? get_pagenum_link($next_paged) : '';
}

