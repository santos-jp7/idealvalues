const webpack = require("webpack");
var path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'idealvalues.js'
  }
};