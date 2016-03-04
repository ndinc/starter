  <style>
    article ,
    section ,
    footer ,
    header ,
    aside ,
    nav  {
      border: 1px solid #f00;
      margin: 10px 0 ;
      /*background: rgba(255, 0, 0, .1);*/
      position: relative;
    }
    article:before ,
    section:before ,
    footer:before ,
    header:before ,
    aside:before ,
    nav:before  {
      content: attr(class);
      background: #f00;
      padding: 5px;
      color: #fff;
      font-weight: bold;
      font-size: 10px;
      position: absolute;
      left: 0;
      top: 0;
      opacity: .7;
    }
    [class^="l-"] {
      background: rgba(255, 0, 0, .1) !important;
    }
    [class^="s-"] {
      background: rgba(0, 255, 0, .1) !important;
      padding: 30px 0;
    }
    [class^="m-"] {
      background: rgba(0, 0, 255, .1) !important;
    }
    .page-section{
      margin: 60px 0;
    }
    .content-section{
      background: transparent !important;
      padding: 20px;
    }


  </style>
  <div id="main" class="l-{{layout_template_name}} l-{{layout_template_name}}-{{page_name}}" test="l-aaa">
    #main の 直下には .page-section / .page-header / .page-footer がきます。<br>
    .page-section は .row / row-full などの親になります。<br>
    .各ページによるレイアウトの違いは .l-{layout_template_name} で区別します。
    <header class="s-{{section_template_name}} page-header">
      <div class="row">
        <div class="columns">
          <h1 class="page_title">h1.page_title</h1>
        </div>
      </div>
    </header>
    <section class="s-{{section_template_name}} page-section">
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
              <li class="m-{{module-name}} ">
                m-{{module-name}}
              </li>
            </ul>
          </section>
          <section class="content-section">
            <p>content-section</p>
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
    <section class="s-{{section_template_name}} page-section">
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
  </div>

src/ 以下を基本的には編集してください。


node_modules