<section id="main" class="l-home">
  <header class="s-home_header page-header">
    <div class="row">
      <div class="small-12 medium-12 large-12 columns">
        <h2 class="e-page_title">Starter Posts (Example)</h2>
      </div>
    </div>
  </header>
  <section class="s-home_content page-section">
    <div class="row">
      <div class="small-12 medium-8 large-8 columns">
        <section class="content-section">
          <h3 class="e-section-title">Recommend Posts</h3>
          <ul class="small-block-grid-1 medium-block-grid-2 large-block-grid-2">
            <?php $wp_post_query = get_post_query('post', 10); ?>
            <?php while ($wp_post_query->have_posts()) : $wp_post_query->the_post(); ?>
              <?php include get_template_directory()."/templates/modules/article.php" ?>
            <?php endwhile ?>
          </ul>
        </section>
        <section class="content-section">
          <h3 class="e-section-title">Recently Posts</h3>
          <ul class="small-block-grid-1 medium-block-grid-2 large-block-grid-2">
            <?php $wp_post_query = get_post_query('post', 10); ?>
            <?php while ($wp_post_query->have_posts()) : $wp_post_query->the_post(); ?>
              <?php include get_template_directory()."/templates/modules/article.php" ?>
            <?php endwhile ?>
          </ul>
        </section>
      </div>
      <div class="small-12 medium-4 large-4 columns">
        <?php include get_template_directory()."/templates/sections/sidebar.php" ?>
      </div>
    </div>
  </section>
</section>