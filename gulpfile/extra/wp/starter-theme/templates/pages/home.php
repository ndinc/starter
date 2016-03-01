  <section id="main" class="l-{layout_template_name} l-{layout_template_name}-{page_name}">
    #main の 直下には .page-section / .page-header / .page-footer がきます。<br>
    .page-section は .row / row-full などの親になります。<br>
    .各ページによるレイアウトの違いは .l-{layout_template_name} で区別します。
    <header class="s-{section_template_name} page-header">
      <div class="row">
        <div class="columns">
          <h1 class="page-title">h1.page-title</h1>
        </div>
      </div>
    </header>
    <section class="s-{section_template_name} page-section">
      <div class="row">
        <div class="columns">
          .row / row-full などの子に .content-section / .content-header / .content-footer がきます。<br>
          各セクションによるレイアウトの違いは .s-{section_template_name} で区別します。
          <header class="content-header">
            <h2 class="section-title">h2.section-title</h2>
          </header>
          <section class="content-section">
            <p>content-section</p>
            <ul class="small-block-grid-2 medium-block-grid-3 large-block-grid-4">
              <li class="m-{module-name} ">
                m-{module-name}
              </li>
            </ul>
          </section>
          <section class="content-section">
            <p>content-section</p>
            <img src="<?php echo assets_path('images/gulp.png') ?>" alt="gulp.js">
            <h4>Ubiquitous Social Icons!</h4>
            <p class="social-icons">
              As an icon font...
                <a class="icon -twitter" href="https://twitter.com/viget">
                  <span class="screenreader">Twitter</span>
                </a>
                <a class="icon -facebook" href="https://www.facebook.com/vigetlabs">
                  <span class="screenreader">Facebook</span>
                </a>
                <a class="icon -instagram" href="https://instagram.com/viget">
                  <span class="screenreader">Instagram</span>
                </a>
            </p>
            <p class="social-icons">


            <a href="https://twitter.com/viget">
              <span class='sprite -twitter '>
                <svg viewBox="0 0 1 1"><use xlink:href='<?php echo assets_path("images/sprites.svg") ?>#twitter' /></use></svg>
              </span>
            </a>
            <a href="https://www.facebook.com/vigetlabs">
              <span class='sprite -facebook '>
                <svg viewBox="0 0 1 1"><use xlink:href='<?php echo assets_path("images/sprites.svg") ?>#facebook' /></use></svg>
              </span>
            </a>
            <a href="https://instagram.com/viget">
              <span class='sprite -instagram '>
                <svg viewBox="0 0 1 1"><use xlink:href='<?php echo assets_path("images/sprites.svg") ?>#instagram' /></use></svg>
              </span>
            </a>
            </p>
            <button id="button">Manually Load Async Module</button>
            <p data-module="Highlight">An auto-loaded async module highlighted this!</p>
          </section>
          <footer class="content-footer">
            <p>footer-footer</p>
          </footer>
        </div>
      </div>
      <!-- or -->
      <div class="row-full">
        <div class="columns">
          <section class="content-section">
            <p>row-full</p>
            <p>content-section</p>
          </section>
        </div>
      </div>
      <!-- or -->
      <div class="row row-large-up">
        <div class="columns">
          <section class="content-section">
            <p>row-large-up</p>
            <p>content-section</p>
          </section>
        </div>
      </div>
    </section>
    <section class="s-{section_template_name} page-section">
      <div class="row">
        <div class="columns">
          .row / row-full などの子に .content-section / .content-header / .content-footer がきます。<br>
          各セクションによるレイアウトの違いは .s-{section_template_name} で区別します。
          <header class="content-header">
            <h2 class="section-title">h2.section-title</h2>
          </header>
          <section class="content-section">
            <div class="row">
              <div class="small-6 medium-6 large-6 columns">
                <p>content-section</p>
              </div>
              <div class="small-6 medium-6 large-6 columns">
                <p>content-section</p>
              </div>
            </div>
          </section>
          <section class="content-section">
            <p>content-section</p>
          </section>
          <section class="content-section">
            <p>content-section</p>
          </section>
          <footer class="content-footer">
            <p>footer-footer</p>
          </footer>
        </div>
      </div>
    </section>
  </section>