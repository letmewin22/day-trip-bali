const { src, dest } = require('gulp')
const config = require('../config')

const scss = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const groupMedia = require('gulp-group-css-media-queries')
const cleanCss = require('gulp-clean-css')
const gulpif = require('gulp-if')
const sourcemaps = require('gulp-sourcemaps')
const rename = require('gulp-rename')
// const webpcss = require('gulp-webpcss')


function css(bs) {
  return src(config.src.css)
    .pipe(gulpif(!config.production, sourcemaps.init()))
    .pipe(
      scss({
        outputStyle: config.production ? 'compressed' : 'expanded'
      }).on('error', scss.logError)
    )
    .pipe(
      groupMedia()
    )
    .pipe(
      autoprefixer({
        cascade: true
      })
    )
    // .pipe(webpcss())
    .pipe(cleanCss())
    .pipe(gulpif(!config.production, sourcemaps.write()))
    .pipe(rename('app.' + config.hash + '.css'))
    .pipe(dest(config.build.css))
    .pipe(bs.stream())
}

module.exports = css
