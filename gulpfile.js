"use strict";

var gulp = require('gulp');
var browserSync = require('browser-sync');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var cp = require('child_process');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

var css_files = [
  "src/lib/normalize.css/normalize.css",
  "src/lib/font-awesome/css/font-awesome.css",
  "src/css/grid.css",
  "src/css/gisto.css",
  "!src/css/style.css"
];
var js_files = [
  "src/lib/jquery/dist/jquery.js",
  "src/js/*.js",
  "!src/js/script.js"
];

gulp.task('css',['sass'], function () {
  gulp.src(css_files)
    .pipe(minifyCss())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('_site/css'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('src/css'));
});

gulp.task('js', function () {
  gulp.src(js_files)
    .pipe(uglify())
    .pipe(concat('script.js'))
    .pipe(gulp.dest('src/js'));
});

gulp.task('sass', function () {
  gulp.src('src/css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css'));
});

gulp.task('fonts', function () {
  return gulp.src('src/lib/font-awesome/fonts/**')
    .pipe(gulp.dest('src/fonts'));
});

gulp.task('jekyll-build',['fonts','css','js'], function (done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
    .on('close', done);
});

gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload();
});

gulp.task('browser-sync', ['sass', 'jekyll-build'], function () {
    browserSync.init({
      server: {
        baseDir: '_site'
      }
    });
});

gulp.task('watch', function () {
  gulp.watch('src/css/*.scss', ['css']);
  gulp.watch(['index.html', '_pages/*','_includes/*', '_posts/*'], ['jekyll-rebuild']);
});

gulp.task('default', ['browser-sync', 'watch']);
