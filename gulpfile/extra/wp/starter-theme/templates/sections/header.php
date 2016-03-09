  <header id="header" class="s-header">
    <section class="page-section has-background">
      <div class="row">
        <div class="small-12 medium-12 large-12 columns">
          <section class="s-header_title content-section">
            <?php if (is_home()): ?>
            <h1 class="e-header_title">Starter</h1>
            <?php else: ?>
            <p class="e-header_title">Starter</p>
            <?php endif ?>
            <p class="e-header_description">This is starter template created by nD inc.</p>
          </section>
          <section class="content-section m-header_nav" js-hamburger>
            <a href="javascript:void(0)" class="m-hamburger_btn" js-hamburger_btn>
              <div></div><div></div><div></div>
            </a>
            <nav class="m-hamburger_content" js-hamburger_content>
              <ul class="">
                <li><a href="<?php site_path('url') ?>/">Home</a></li>
                <li><a href="<?php site_path('url') ?>/article/">Article</a></li>
                <li><a href="<?php site_path('url') ?>/about/">About</a></li>
              </ul>
            </nav>
          </section>
        </div>
      </div>
    </section>
  </header><!-- /header -->