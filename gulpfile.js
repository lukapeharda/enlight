var gulp = require('gulp'),
    rename = require('gulp-rename'),
    postcss = require('gulp-postcss'),
    cssnano = require('gulp-cssnano'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps');

require('es6-promise').polyfill();

gulp.task('css', function() {
    return gulp
        .src('./src/sass/main.scss')
        .pipe(sourcemaps.init())
        .pipe(postcss([require('autoprefixer')({}),require('precss')({})]))
        // .pipe(cssnano())
        .pipe(rename('main.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('./src/sass/**/*.scss', ['css']);
});