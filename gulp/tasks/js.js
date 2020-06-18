const { src, dest } = require('gulp')
const webpack = require('webpack-stream')
const webpackConfig = require('../../webpack.config.js').createConfig
const rename = require('gulp-rename')

const config = require('../config')

// webpack
function js(bs) {
  return src(config.src.js)
    // @ts-ignore
    .pipe(webpack(webpackConfig(config.env)))
    .pipe(rename('app.' + config.hash + '.js'))
    .pipe(dest(config.build.js))
    .pipe(bs.stream())
}

module.exports = js
