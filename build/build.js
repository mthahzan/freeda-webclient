// https://github.com/shelljs/shelljs
require('./check-versions')();
require('shelljs/global');

var environment = null;

process.argv.forEach((val) => {
  var envIndex = val.indexOf('env=');

  if (envIndex > -1) {
    environment = val.split('=')[1];
  }
});

environment = environment || 'development';

env.NODE_ENV = environment;

var path = require('path');
var config = require('../config');
var ora = require('ora');
var webpack = require('webpack');
var webpackConfig = require('./webpack.prod.conf');

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)

var spinner = ora('building for ' + environment + '...');
spinner.start()

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory);
rm('-rf', assetsPath);
mkdir('-p', assetsPath);
cp('-R', 'static/*', assetsPath);

webpack(webpackConfig, function (err, stats) {
  spinner.stop();
  if (err) throw err;
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n');
})
