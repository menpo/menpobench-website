var path = require('path');

module.exports = {
    entry: "./js/index.js",
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: "/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            },
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css?sourceMap", "resolve-url", "sass?sourceMap", "autoprefixer"]
            },
            {
                test: /\.svg$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: []
};
