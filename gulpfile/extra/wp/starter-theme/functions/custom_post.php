<?php
function register_custom_post() {
  $labels = array(
    'name'               => _x( '記事', 'post type general name', 'ndinc' ),
    // 'singular_name'      => _x( 'Book', 'post type singular name', 'ndinc' ),
    // 'menu_name'          => _x( 'Books', 'admin menu', 'ndinc' ),
    // 'name_admin_bar'     => _x( 'Book', 'add new on admin bar', 'ndinc' ),
    // 'add_new'            => _x( 'Add New', 'book', 'ndinc' ),
    // 'add_new_item'       => __( 'Add New Book', 'ndinc' ),
    // 'new_item'           => __( 'New Book', 'ndinc' ),
    // 'edit_item'          => __( 'Edit Book', 'ndinc' ),
    // 'view_item'          => __( 'View Book', 'ndinc' ),
    // 'all_items'          => __( 'All Books', 'ndinc' ),
    // 'search_items'       => __( 'Search Books', 'ndinc' ),
    // 'parent_item_colon'  => __( 'Parent Books:', 'ndinc' ),
    // 'not_found'          => __( 'No books found.', 'ndinc' ),
    // 'not_found_in_trash' => __( 'No books found in Trash.', 'ndinc' )
  );

  $args = array(
    'labels' => $labels,
    'public' => true,
    'publicly_queryable' => true,
    'description'=> 'description ARTICL',
    'show_ui' => true,
    'query_var' => true,
    'exclude_from_search' => false,
    'rewrite' => true,
    'hierarchical' => false,
    'menu_position' => 4,
    'has_archive' => true,
    'supports' => array('title','editor','author','except')
    // 'taxonomies' => array('category')
  );
  register_post_type('article', $args);

  register_taxonomy(
    'tax',
    'article',
    array(
      'hierarchical' => true,
      'update_count_callback' => '_update_post_term_count',
      'label' => '分類',
      'singular_label' => '分類',
      'public' => true,
      'rewrite' => array(
        // 'slug' => '',
        'with_front' => false,
        'hierarchical' => true
      )
    )
  );
}

// add_action('init','register_custom_post');