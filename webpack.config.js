const webpack = require("webpack");
var path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, "cdn"),
    filename: 'idealvalues.js'
  }
};