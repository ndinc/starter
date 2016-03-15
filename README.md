#Starter
This Starter is folked by [Gulp Starter](https://github.com/vigetlabs/gulp-starter)<br>
Add wordpress customize and my commands.


# Basic Usage
Make sure Node 0.12.x is installed. I recommend using [NVM](https://github.com/creationix/nvm) to manage versions.

### Dependencies
- [npm](https://www.npmjs.com/)
- [gulp](http://gulpjs.com/)
- [wp-cli](http://wp-cli.org/)
- [git-flow](http://danielkummer.github.io/git-flow-cheatsheet/index.ja_JP.html)

## Install Dependencies

```bash
npm install
```

And, Change these values on **package.json**
```json
{
  "name": "starter",
  "version": "2.2.0",
  "description": "A full featured configurable gulp asset pipeline and static site builder",
  "homepage": "http://ndinc.github.io/starter/",
  "repository": {
    "type": "git",
    "url": "git://github.com/ndinc/starter.git"
  }
}
```

Then,
```bash
gulp setup
```

#### and Wordpress
```bash
gulp wp:setup
```

## Start compiling, serving, and watching files

####Static Site
#####watch
```bash
gulp
```
#####compuke for production
```bash
gulp production
```
####Wordpress
#####watch
```bash
gulp wp
```
#####production
```bash
gulp wp:production
```


## Configuration
Directory and top level settings are convienently exposed in `gulpfile/config.json`. All task configuration objects have `src` and `dest` directories specfied. These are relative to `root.src` and `root.dest` and `root.public` respectively. Each configuration also has an extensions array. This is used for file watching, and file deleting/replacing.

If there is a feature you do not wish to use on your project, simply delete the configuration, and the task will be skipped.

<!--
### Run JavaScript Tests
```
npm run test
```
Test files located in `__tests__` folders are picked up and run using
[Karma](http://karma-runner.github.io/0.12/index.html), [Mocha](http://mochajs.org/), [Chai](http://chaijs.com/), and [Sinon](http://sinonjs.org/). The test script right now first compiles a production build, and then, if successful runs Karma. This is nice when using something like [Travis CI](https://travis-ci.org/vigetlabs/gulp-starter) in that if an error occurs during the build step, Travis alerts me that it failed. To pass, the files have to compile properly AND pass the JS tests.
 -->

<!--
### Build production-ready files
```
npm run production
```

This will compile revisioned and compressed files to `./public`. To build production files and preview them localy, run

```
npm run demo
```

This will start a static server that serves your production files to http://localhost:5000. This is primarily meant as a way to preview your production build locally, not necessarily for use as a live production server.
 -->

## Deploy

#### Setup

#####To gh-pages
Change deploy tasks on `gulpfile/package.json`

```json
{
  "tasks": {
    "deploy": {
      "pretasks": ["production"],
      "tasks": ["deploy:github"]
    }
  }
}
```

#####To ftp-server
Setup **`server.config.json`**

Change deploy tasks on `gulpfile/package.json`

for static site
```json
{
  "tasks": {
    "deploy": {
      "pretasks": ["production"],
      "tasks": ["deploy:ftp"]
    }
  }
}
```

for wordpress
```json
{
  "tasks": {
    "deploy": {
      "pretasks": ["wp:production"],
      "tasks": ["deploy:ftp"]
    }
  }
}
```
#### Command
```
npm run deploy
```
This task compiles production code and then deploy contents of your `root.public` to a `gh-pages` or `ftp server`

# Task Details

#### JS
```
gulpfile/tasks/webpackWatch
gulpfile/tasks/webpackProduction
```
Modular ES6 with [Babel](http://babeljs.io/) and [Webpack](http://webpack.github.io/)

I've included various examples of generating mulitple files, async module loading and splitting out shared dependences to show the power of Webpack. Adjust the webpack config (`.gulpfile/config/webpack`) to fit your project. For smaller one-pagers, you'll probably want to skip the async stuff, and just compile a single bundle.

There are a couple of webpack options exposed in the top-level `gulpfile/config.json` file.

`entries`: Discrete js bundle entry points. A js file will be bundled for each item. Paths are relative to the `javascripts` folder. This maps directly to `webpackConfig.entry`.

`extractSharedJs`: Creates a `shared.js` file that contains any modules shared by multiple bundles. Useful on large sites with descrete js running on different pages that may share common modules or libraries. Not typically needed on smaller sites.

If you want to mess with the specifics of the webpack config, check out `gulpfile/lib/webpack-multi-config.js`.

#### CSS
```
gulpfile/tasks/css
```
Your Sass gets run through Autoprefixer, so don't prefix! The examples use the indented `.sass` syntax, but use whichever you prefer.

#### HTML
```
gulpfile/tasks/html
```
Robust templating with [Nunjucks](https://mozilla.github.io/nunjucks/). Nunjucks is nearly identical in syntax to Twig (PHP), and replaces Swig (and Twig-like js templating language), which is no longer maintained.

A global data file is set up at [src/html/data/global.json](src/html/data/global.json), is read in by the `html` task, and exposes the properties to your html templates. See [social-icons-font.html](src/html/shared/social-icons-font.html) for example usage.

#### Fonts
```
gulpfile/tasks/fonts
```
All this task does is copy fonts from `./src/fonts` to `./public/fonts`. A sass `+font-face` mixin is included in `./src/stylesheets/base/mixins`.

#### IconFont
```
gulpfile/tasks/iconFont
```
SVGs added to `src/icons` will be automatically compiled into an iconFont, and output to `./public/fonts`. At the same time, a `.sass` file will be output to `src/stylesheets/generated/_icons.sass`. This file contains mixins and classes based on the svg filename. If you want to edit the template that generates this file, it's at `gulpfile/tasks/iconFont/template.sass`

##### Usage:
With generated classes:
```
<span class="icon -twitter"></span>
```

With mixins:
```sass
.lil-birdy-guy
  +icon--twitter
```

```scss
.lil-birdy-guy {
  @include icon--twitter;
}
```

```html
<span class="lil-birdy-guy"></span>
```

*Don't forget about accessibility!*

```html
<span aria-label="Twitter" class="icon -twitter"></span>
<!-- or -->
<div class="icon -twitter"><span class="screen-reader">Twitter</span></div>
```

#### SVG Sprites
```
gulpfile/tasks/svgSprite
```
SVGs sprites are super powerful. This particular setup allows styling 2 different colors from your css. You can have unlimited colors hard coded into your svg.

In the following example, the first path will be `red`, the second will be `white`, and the third will be `blue`. Paths **without a fill attribute** will inherit the `fill` property from css. Paths with **fill="currentColor"** will inherit the current css `color` value, and hard-coded fills will not be overwritten, since inline styles trump css values.

```sass
.sprite
  fill: red
  color: white
```

```svg
  <svg xmlns="http://www.w3.org/2000/svg">
    <path d="..."/>
    <path fill="currentColor" d="..."/>
    <path fill="blue" d="..."/>
  </svg>
```

I've included a helper to generate the required svg markup in `src/html/macros/helpers.html`, so you can just do:
```html
  {{ sprite('my-icon') }}
```
Which spits out:

```html
  <span class='sprite -my-icon'>
    <svg viewBox="0 0 1 1"><use xlink:href='images/spritesheets/sprites.svg#my-icon' /></use></svg>
  </span>
```

I recommend setting up your SVGs on a 500 x 500 canvas, centering your artwork, and expanding/combining any shapes of the same color. This last step is important.

#### Static Files (favicons, app icons, etc.)
There are some files that belong in your root destination directory that you won't want to process or revision in production. Things like [favicons, app icons, etc.](http://realfavicongenerator.net/), should go in `src/static`, and will get copied over to `public` as a last step (after revisioning in production). *Nothing* should ever go directly in `public`, since it gets completely trashed and re-built when running the `default` or `production` tasks.

------
Visit [nD inc.](http://ndinc.jp)

## Todo
- デフォルトのモバイルの対応を
- よくつかう js プラグインを入れる
- sprite-smith での対応
- useminでstylesheetsまとめる
- foundation 6 にアップデート（st3のsnippetが作られたら）