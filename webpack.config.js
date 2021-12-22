const path = require('path');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'api.js'
  },
  mode: 'production',
  plugins: [
    new Dotenv({
        path: '.env', // Path to .env file (this is the default)
        safe: false // load .env.example (defaults to "false" which does not use dotenv-safe)
      }),
      new CopyPlugin({
        patterns: [
          { from: path.resolve(__dirname, 'node_modules/oracledb/build'), to: 'node_modules/oracledb/build' }
        ],
      })
  ],
  target: 'node'
};