var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    cssnano = require('gulp-cssnano'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps');

require('es6-promise').polyfill();

gulp.task('css', function() {
    return gulp
        .src('./src/sass/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        // .pipe(cssnano())
        .pipe(rename('main.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('./src/sass/**/*.scss', ['css']);
});