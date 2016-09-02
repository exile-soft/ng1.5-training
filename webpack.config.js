var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/app/app.js",
  output: {
    path: path.join(__dirname, "bin"),
    // publicPath: "/assets/",
    filename: "bundle.js"
  },
  plugins: [
	new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
      hash: true
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      //{ test: /\.(jpe?g|png|gif|svg)$/, loader:'file' },
      { test: require.resolve('lodash'), loader: 'expose?_' }
    ]
  }
};

// { test: /\.html$/, loaders: [ "html?" + JSON.stringify({ attrs: ["img:src", "img:ng-src"] })] },