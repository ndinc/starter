    <section class="s-article-other page-section">
      <div class="row">
        <div class="small-12 medium-12 large-12 medium-centered columns">
          <header class="content-header">
            <h3 class="section-title e-section-title text-center">その他の記事</h3>
          </header>
          <section class="content-section">
            <ul class="small-block-grid-2 medium-block-grid-3 large-block-grid-4">
              <?php for ($i=0; $i < 4; $i++): ?>
              <?php include get_theme_dir().'/templates/modules/list_article.php' ?>
              <?php endfor ?>
            </ul>
          </section>
          <footer class="content-footer">
            <div class="row">
              <div class="small-12 medium-10 large-10 medium-centered columns">
                <div class="dmy-box">
                  Google ads
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </section>