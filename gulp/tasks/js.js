const { src, dest } = require('gulp')
const webpack = require('webpack-stream')
const webpackConfig = require('../../webpack.config.js').createConfig
const notify = require('gulp-notify')

const config = require('../config')

// webpack
function js(bs) {
  return src(config.src.js)
    // @ts-ignore
    .pipe(webpack(webpackConfig(config.env)))
    // @ts-ignore
    .on('error', notify.onError('JS Error: <%= error.message %>'))
    .pipe(dest(config.build.js))
    .pipe(bs.stream())
}

module.exports = js
