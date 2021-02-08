const gulp = require('gulp');
const gutil = require('gulp-util');
const concat = require('gulp-concat');
const minifycss = require('gulp-minify-css');
const uglify = require('gulp-uglify');
const useref = require('gulp-useref');

const html = {
  source: 'src',
  target: 'dist'
};

const css = {
  source: 'src/assets/css',
  target: 'dist/assets/css'
};

const js = {
  source: 'src/assets/js',
  target: 'dist/assets/js'
};

const imgs = {
  source: 'src/assets/imgs',
  target: 'dist/assets/imgs'
};

const icons = {
  source: 'src/assets/icons',
  target: 'dist/assets/icons'
};

function htmlTask(done) {
  gulp.src([
    html.source + '/*.html'
  ])
    .pipe(useref({ noAssets: true }))
    .pipe(gulp.dest(html.target));
    done();
}

function cssTask(done) {
  gulp.src([
    css.source + '/*.css'
  ])
    .pipe(minifycss())
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest(css.target));
    done();
}

function jsTask(done) {
  gulp.src([
    js.source + '/*.js'
  ])
    .pipe(uglify({ mangle: true }).on('error', gutil.log))
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest(js.target));
    done();
}

function imgsTask(done) {
  gulp.src([
    imgs.source + '/**/*'
  ])
    .pipe(gulp.dest(imgs.target));
  done();
}

function iconsTask(done) {
  gulp.src([
    icons.source + '/**/*'
  ])
    .pipe(gulp.dest(icons.target));
  done();
}

gulp.task('default', gulp.series(htmlTask, cssTask, jsTask, imgsTask, iconsTask));
