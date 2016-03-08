<?php
function get_head_meta($name=null, $type=null){
  global $post;
  global $_DATA;
  global $_HEAD_META;

  $cache = true;

  // $_HEAD_META があれば、キャッシュさせた値を返す。
  // cache ではなく新規に meta を取得したい場合、$cache を false にする
  if(isset($_HEAD_META) and $cache){
    $meta = $_HEAD_META;
    return (isset($name) && isset($meta[$name]) )? $meta[$name] : $meta;
  }

  // $_DATAがセットされていない場合、空を返す
  if(empty($_DATA['meta'])){
    return '';
  }

  $_META = $_DATA['meta'];

  //整形する meta 情報を配列
  $meta = array();

  switch (true) {
    case is_home():
        $meta = replace_template_value($_META['pages']['home']);
      break;
    case is_single():
        $meta = replace_template_value($_META['single']);
      break;
    case is_page():
      $slug = get_page_slug();
        $meta = replace_template_value($_META['pages'][$slug]);
      break;
    case is_post_type_archive():
        $meta = replace_template_value($_META['archive']);
      break;
    case is_tax():
        $meta = replace_template_value($_META['taxonomy']);
      break;
    case is_search():
        $meta = replace_template_value($_META['search']);
      break;
    case is_404():
        $meta = $_META['pages']['404'];
      break;
    default:
        $meta = replace_template_value($_META['pages']['home']);
      break;
  }

  $meta = array_merge($_META, $meta);

  return ( isset($name) && isset($meta[$name]) )? $meta[$name] : $meta;
}



function replace_template_value($data){
  if( is_array($data) ){
    foreach($data as $key => $value){
      $data[$key] = replace_template_value($value);
    }
  }else{
    $data = preg_replace_callback('/{{(.+)}}/', function($matches){
      $value = explode('|', $matches[1])[1];
      return get_replace_value($value);
    }, $data);

    if(preg_match('/\.(png|jpeg|jpg|gif)$/', $data) ){
      $data = assets_path($data);
    }
  }
  return $data;
}


function get_replace_value($key){
  global $_DATA;

  $queried_object = get_queried_object();

  switch ($key) {
    case 'home-title':
      return get_bloginfo('name');
      break;
    case 'home-description':
      return get_bloginfo('description');
      break;
    case 'home-url':
      return get_bloginfo('url');
      break;
    case 'home-image':
      return $_DATA['meta']['image'];
      break;
    case 'single-title':
      return get_the_title($queried_object->ID);
      break;
    case 'single-description':
      return get_the_excerpt();
      break;
    case 'single-url':
      return get_permalink($queried_object->ID);
      break;
    case 'single-image':
      return get_post_main_image($queried_object->ID);
      break;
    case 'archive-title':
      return $queried_object->label;
      break;
    case 'archive-description':
      return $queried_object->description;
      break;
    case 'archive-url':
      return get_bloginfo('url').'/'.$queried_object->rewrite['slug'];
      break;
    case 'archive-image':
      return $_DATA['meta']['image'];
      break;
    case 'taxonomy-title':
      return $queried_object->name;
      break;
    case 'taxonomy-description':
      return $queried_object->description;
      break;
    case 'taxonomy-url':
      return get_term_link($queried_object->slug, $queried_object->taxonomy);
      break;
    case 'taxonomy-image':
      return $_DATA['meta']['image'];
      break;
    case 'search-title':
      return get_search_query();
      break;
    case 'search-description':
      return $_DATA['meta']['description'];
      break;
    case 'search-url':
      return $_DATA['meta']['url'] . '?s=' . get_search_query();
      break;
    case 'search-image':
      return $_DATA['meta']['image'];
      break;
    default:
      return '';
      break;
  }
}