/*import  watch  from 'gulp';
import series  from 'gulp';
import gulp from 'gulp';
import Cssnano from 'gulp-cssnano';
import sass from 'gulp-sass';
import webp from 'gulp-webp';*/
var gulp = require('gulp');
var cssnano = require('gulp-cssnano');

const sass = require('gulp-sass')(require('sass'));
var webp = required('webp');

gulp.task('sass', function() {
    return gulp.src('app/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(Cssnano())
        .pipe(gulp.dest('dist/css'))
    
});

gulp.task('watch', function(){
    gulp.watch('app/scss/*.scss', gulp.series('sass'))
})

gulp.task('web', function(){
    gulp.src('app/img/*.png')
    .pipe(webp())
    .pipe(gulp.dest('dist/img'))
})