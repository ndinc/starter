<section id="main" class="l-{layout_template_name} l-{layout_template_name}-{page_name}">
  #main の 直下には .page-section / .page-header / .page-footer がきます。<br>
  .page-section は .row / row-full などの親になります。<br>
  .各ページによるレイアウトの違いは .l-{layout_template_name} で区別します。
  <header class="s-{section_template_name} page-header">
    <div class="row">
      <div class="columns">
        <h1 class="e-page_title">h1.page_title</h1>
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
            {% for i in [1,2,3,4,5,6,7,8,9,10,11,12] %}
            <li class="m-{module-name} ">
              m-{module-name}
            </li>
            {% endfor %}

          </ul>
        </section>
        <section class="content-section">
          <p>content-section</p>
          <img src="images/gulp.png" alt="gulp.js">
          <h4>Ubiquitous Social Icons!</h4>
          {% include "includes/social-icons-font.html" %}
          {% include "includes/social-icons-svg.html" %}
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