'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');
var cssmin = require('gulp-csso');
var server = require('browser-sync').create();
var pagebuilder = require('gulp-pagebuilder');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var run = require('gulp-sequence');
var del = require('del');
var concat = require('gulp-concat');
var sourcemap = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

gulp.task('style', function() {
  gulp.src('scss/style.scss')
    .pipe(plumber())
    .pipe(sourcemap.init({largeFile: true}))
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({browsers: [
        'last 2 versions', 'last 7 iOS version'
      ]}),
      // mqpacker({
      //   sort: false
      // })
    ]))
    .pipe(gulp.dest('build/css'))
    .pipe(cssmin())
    .pipe(rename('style.min.css'))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('build/css'))
    .pipe(server.stream());
});

gulp.task('html', function () {
  gulp.src('html/*.html')
    .pipe(pagebuilder())
    .pipe(gulp.dest('build'))
    .pipe(server.reload({stream: true}));
});

gulp.task('images', function () {
  return gulp.src('images/**/*.{jpg,png,gif,svg}')
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.jpegtran({progressive: true})
    ]))
    .pipe(gulp.dest('build/images'));
});

gulp.task('svgsprite', function () {
  return gulp.src('images/svg/*.svg')
    .pipe(svgmin({
      plugins: [{removeUselessDefs: false}]
    }))
    .pipe(svgstore({inlineSvg: true}))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('build/images'));
});

gulp.task('scripts', function () {
  gulp.src(['./js/modules/*.js', './js/scripts.js'])
    .pipe(plumber())
    .pipe(sourcemap.init({largeFile: true}))
    .pipe(concat('main.js', {newLine: ';'}))
    .pipe(gulp.dest('./build/js'))
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(sourcemap.write('.', {addComents: true}))
    .pipe(gulp.dest('./build/js'))
    .pipe(server.reload({stream: true}));
});

gulp.task('copy', function () {
  return gulp.src([
    'fonts/**/*',
    'js/vendors/*',
    'css/vendor/*',
    'video/**/*'
    ],
    {
    base: '.'
    })
    .pipe(gulp.dest('build'
  ));
});

gulp.task('clean', function () {
  return del('build');
});

gulp.task('serve', function() {
  server.init({
    server: 'build',
    notify: false,
    open: true,
    cors: true,
    ui: false,
    tunnel: 'verstaiamhero'
  });

  gulp.watch('scss/**/*.{scss,sass}', ['style']);
  gulp.watch('js/**/*.js', ['scripts']);
  gulp.watch('html/**/*.html', ['html']);
});

gulp.task('build', function(fn) {
  run('clean', 'copy', 'html', 'style', 'scripts', 'images', 'svgsprite', fn);
});
