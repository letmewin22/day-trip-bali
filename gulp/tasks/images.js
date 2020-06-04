const config = require('../config')

const { src, dest } = require('gulp')
const imagemin = require('gulp-imagemin')
const gulpif = require('gulp-if')
// const webp = require('gulp-webp')

function images(bs) {
  return src(config.src.img)
    // .pipe(
    //   webp({
    //     quality: 70
    //   })
    // )
    .pipe(dest(config.build.img))
    .pipe(src(config.src.img))
    .pipe(gulpif(config.production, imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({ quality: 75, progressive: true }),
      imagemin.optipng({ optimizationLevel: 3 }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: false },
          { cleanupIDs: false }
        ]
      })
    ])))
    .pipe(dest(config.build.img))
    .pipe(bs.stream())
}

module.exports = images 
