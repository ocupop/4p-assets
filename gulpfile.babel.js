const pkg = require('./package.json');
const gulp = require("gulp");
const suite = require('@cloudcannon/suite');
const { buildScripts } = require('./tasks/webpack');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const { config } = require('./tasks/webpack');
const bundler = webpack(config);

suite.dev(gulp, {
  serve: {
    middleware: [
      webpackDevMiddleware(bundler, { /* options */ }),
      webpackHotMiddleware(bundler)
    ]
  }
});

// function hello(cb) {
//   console.log('hello from gulp');
//   cb();
// }
// exports.hello = hello;

exports.buildScripts = buildScripts;

