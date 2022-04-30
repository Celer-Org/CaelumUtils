const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')
const cleanCSS = require('gulp-clean-css')

function buildStyles() {
    return src('caelum/**/*.scss')
        .pipe(sass())
        //.pipe(purgecss({content: ['*.html']}))
        //.pipe(cleanCSS({compatibility: 'ie8'})) // minify CSS
        .pipe(dest('css'))
}

function watchTask() {
    watch(['caelum/**/*.scss', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)