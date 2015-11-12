'use strict';

var path = require('path');
var del = require('del');

var gulp = require('gulp');
var replace = require('gulp-replace');
var gutil = require('gulp-util');

var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");

var BUILD_DIR = './build';

gulp.task('default', ['webpack-dev-server']);

gulp.task('clean', function (callback) {
    del([BUILD_DIR], callback);
});

gulp.task('copystatic', ['clean'], function(){
    return gulp.src(['static/**/*']).pipe(gulp.dest(BUILD_DIR));
});

gulp.task("webpack-dev-server", ['copystatic'], function() {
    // modify some webpack config options for development
    var devConfig = Object.create(webpackConfig);
    devConfig.devtool = "eval-source-map";
    devConfig.debug = true;

    // Start a webpack-dev-server
    new WebpackDevServer(webpack(devConfig), {
        contentBase: BUILD_DIR,
        stats: {
            colors: true
        }
    }).listen(8080, "localhost", function(err) {
            if(err) {
                throw new gutil.PluginError("webpack-dev-server", err);
            }
            gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/");
        });
});

gulp.task("webpack:build", ['copystatic'], function(callback) {
    // modify some webpack config options
    var productionConfig = Object.create(webpackConfig);
    productionConfig.devtool = "source-map";  // full seperate source maps
    productionConfig.plugins = productionConfig.plugins.concat(
        new webpack.DefinePlugin({
            "process.env": {
                // This has effect on the react lib size
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    );

    // run webpack
    webpack(productionConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack:build]", stats.toString({
            colors: true
        }));
        callback();
    });
});

gulp.task('build', ['webpack:build']);

