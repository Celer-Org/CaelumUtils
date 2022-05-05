const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')
const cleanCSS = require('gulp-clean-css')
const postcss = require('gulp-postcss')
const cssnano = require('cssnano')

const plugins = [
    cssnano({
        preset: ['advanced', {
            discardComments: {
                removeAll: true,
            },
        }]
    })
]

function buildStyles() {
    return (
        src('scss/**/*.scss')
            .pipe(sass())
            // .pipe(purgecss({content: ['*.html']}))
            .pipe(postcss(plugins))
            .pipe(dest('css'))
    )
}

function watchTask() {
    watch(['caelum/**/*.scss', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)
