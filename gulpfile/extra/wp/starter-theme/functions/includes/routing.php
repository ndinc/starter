<?php
function get_routing_path(){
  global $wp_query;
  $dir = '';
  if(is_home()){
    $page_path = $dir."pages/home.php";
  }else if(is_single()){
    $page_path = $dir.'single/'.get_post_type().'.php';
    if (!file_exists($page_path)){
      $page_path = $dir.'single/article.php';
    }
  }else if(is_post_type_archive()){
    $page_path = $dir.'pages/' . get_query_var('post_type') . '.php';
  }else if(is_page()){
    $page_path = $dir.'pages/' . get_query_var('name') . '.php';
  }else if(is_tax()){
    $page_path = $dir.'pages/'.$wp_query->queried_object->taxonomy.'.php';
    if (!file_exists($page_path)){
      $page_path = $dir.'pages/taxonomy.php';
    }
  }else if(is_search()){
    $page_path = $dir."pages/search.php";
  }else if(is_404()){
    $page_path = $dir."pages/404.php";
  }else{
    $page_path = $dir."pages/index.php";
  }
  if (!file_exists($page_path)){
    $page_path = $dir.'pages/home.php';
  }
  return $page_path;
}