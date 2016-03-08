<section id="main" class="l-article">
  <section class="s-article_content page-section">
    <div class="row">
      <div class="small-12 medium-8 large-8 columns">
        <header class="content-section">
          <h1 class="e-page_title title"><?php the_title() ?></h1>
          <p class="date text-right"><?php the_time('M j, Y'); ?></p>
        </header>
        <section class="content-section">
          <p><img src="http://dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image" alt="placeholder+image"></p>
        </section>
        <section class="content-section">
          <div class="m-content">
            <?php the_content() ?>
          </div>
        </section>
      </div>
      <div class="small-12 medium-4 large-4 columns">
        <?php include get_template_directory()."/templates/sections/sidebar.php" ?>
      </div>
    </div>
  </section>
</section>