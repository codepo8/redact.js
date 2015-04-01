'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');

var DEST = 'build/';

gulp.task('default', function() {
  return gulp.src('redact.js')
    .pipe(gulp.dest(DEST))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest(DEST));
});
