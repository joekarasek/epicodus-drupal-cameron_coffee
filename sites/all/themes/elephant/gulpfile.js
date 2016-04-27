'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');

// SCSS
gulp.task('css', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('css:watch', ['css'], function () {
  gulp.watch('./scss/**/*.scss', ['css']);
});


// Gulp default
gulp.task('default', [
  'css:watch'
]);
