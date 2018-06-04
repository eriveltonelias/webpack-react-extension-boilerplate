const { getHTMLPlugins, getOutput, getCopyPlugins, getFirefoxCopyPlugins } = require('./webpack.utils');
const path = require('path');

const generalConfig = {
  mode: 'production',
  entry: {
    "popup": path.resolve(__dirname, "src/popup/popup.jsx"),
    "options": path.resolve(__dirname, "src/options/options.jsx"),
    "content": path.resolve(__dirname, "src/content/content.js"),
    "background": path.resolve(__dirname, "src/background/background.js")
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        query: {
          presets: ['@babel/preset-env','@babel/preset-react'],
        },
      },
    ]
  },
};

module.exports = [
  {
    ...generalConfig,
    output: getOutput('chrome'),
    plugins: [
      ...getHTMLPlugins('chrome'),
      ...getCopyPlugins('chrome'),
    ]
  },
  {
    ...generalConfig,
    output: getOutput('opera'),
    plugins: [
      ...getHTMLPlugins('opera'),
      ...getCopyPlugins('opera'),
    ]
  },
  {
    ...generalConfig,
    output: getOutput('firefox'),
    plugins: [
      ...getHTMLPlugins('firefox'),
      ...getFirefoxCopyPlugins('firefox'),
    ]
  },
];
