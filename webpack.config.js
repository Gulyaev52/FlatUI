const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const pageList = [
  'flat-ui', 
  'messages',
  'contacts',
  'profile',
  'sign-in',
  'sign-up'
];

const entries = {};
pageList.forEach(page => { 
  entries[page] = ['babel-polyfill', `./pages/${page}/${page}.js`]; 
});

const htmlPlugins = [];

pageList.forEach(page => {
  htmlPlugins.push(new HtmlWebpackPlugin({
    template: `pages/${page}/${page}.pug`,
    filename: `${page}.html`,
    chunks: [page]
  }));
});

module.exports = {
  entry: entries,

  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: [ 
          path.resolve(__dirname, 'web_modules'), 
          path.resolve(__dirname, 'pages')
        ],
        query: { 
          presets: ['babel-preset-latest'] 
        },
      },
      { 
        test: /\.pug$/, 
        loader: 'pug' 
      }, 
      { 
        test: /\.(css|styl)/, 
        loader: ExtractTextPlugin.extract('css!stylus') 
      },
      { 
        test: /\.(svg|png|ttf|eot|woff|woff2)(\?v=.+)?$/, 
        loader: 'file?name=[path][name].[ext]' 
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin('[name].css', { allChunks: true }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    ...htmlPlugins,
  ], 

  externals: {
    ymaps: 'ymaps'
  },

  watch: true,

  devServer: {
      contentBase: './public'
  }
};
