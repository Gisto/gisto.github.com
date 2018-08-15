"use strict";

var gulp = require('gulp');
var browserSync = require('browser-sync');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var cp = require('child_process');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var args = require('yargs').argv;
var gulpif = require('gulp-if');
var minifyInline = require('gulp-minify-inline-scripts');

var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build',
  cssChanged: '<span style="color: grey">CSS UPDATED:</span>',
  jsChanged: '<span style="color: grey">JavaScript UPDATED:</span>'
};

var css_files = [
  "src/lib/normalize.css/normalize.css",
  "src/lib/font-awesome/css/font-awesome.css",
  "src/lib/enjoyhint/enjoyhint.css",
  "src/css/grid.css",
  "src/css/gisto.css",
  "!src/css/style.css"
];
var js_files = [
  "src/lib/jquery/dist/jquery.js",
  "src/lib/enjoyhint/enjoyhint.min.js",
  "src/js/*.js",
  "!src/js/script.js"
];

gulp.task('sass', function (done) {
    gulp.src('src/css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css'));
    done();
});

gulp.task('css', gulp.series('sass', function (done) {
  browserSync.notify(messages.cssChanged);
  return gulp.src(css_files)
    .pipe(gulpif(args.min, minifyCss()))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('_site/css'))
    .pipe(browserSync.reload({stream: true}))
    .pipe(gulp.dest('src/css'));
    done();
}));

gulp.task('js', function () {
  browserSync.notify(messages.jsChanged);
  return gulp.src(js_files)
    .pipe(gulpif(args.min, uglify()))
    .pipe(concat('script.js'))
    .pipe(gulp.dest('_site/js'))
    .pipe(browserSync.reload({stream: true}))
    .pipe(gulp.dest('src/js'));
});

gulp.task('html', function () {
  var opts = {
    comments: false,
    spare: true
  };
  gulp.src('_site/**/*.html')
    .pipe(gulpif(args.min, minifyHtml(opts)))
    .pipe(gulpif(args.min, minifyInline()))
    .pipe(gulp.dest('_site/'));
});

gulp.task('fonts', function () {
  return gulp.src([
    'src/lib/font-awesome/fonts/**',
    'src/lib/enjoyhint/src/Casino_Hand/**'
  ])
    .pipe(gulp.dest('src/fonts'));
});

gulp.task('jekyll-build', gulp.series('fonts', 'css', 'js', function (done) {
  browserSync.notify(messages.jekyllBuild);
    return cp.spawn('bundle', ['exec', 'jekyll', 'build'], { stdio: 'inherit' }).on('close', done);
}));

gulp.task('jekyll-simple-build', function (done) {
  browserSync.notify(messages.jekyllBuild);
    return cp.spawn('bundle', ['exec', 'jekyll', 'build'], { stdio: 'inherit' }).on('close', done);
});

gulp.task('jekyll-just-reload', gulp.series('jekyll-simple-build', function (done) {
  browserSync.reload();
  done();
}));

gulp.task('browser-sync', gulp.series('sass', 'jekyll-build', function (done) {
  browserSync.init({
    server: {
      baseDir: '_site'
    }
  });
  done();
}));

gulp.task('watch', function () {
  gulp.watch('src/css/*.scss', gulp.parallel('css'));
  gulp.watch('src/js/main.js', gulp.parallel('js'));
  gulp.watch('src/index.html', gulp.parallel('jekyll-just-reload'));
  gulp.watch('src/_pages/*', gulp.parallel('jekyll-just-reload'));
  gulp.watch('src/_includes/*', gulp.parallel('jekyll-just-reload'));
  gulp.watch('src/_posts/*', gulp.parallel('jekyll-just-reload'));
});

gulp.task('default', gulp.series('browser-sync', 'watch'));

/**
 * Use with `gulp release --min` - will enable all minifications
 */
gulp.task('release', gulp.series('jekyll-build', function() {
  gulp.start('html');
  // Start browser sync just for preview
  browserSync.init({
    server: {
      baseDir: '_site'
    }
  });
}));
