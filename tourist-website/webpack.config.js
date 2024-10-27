const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('tailwindcss'),
                  require('autoprefixer'),
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.js$/,
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      // Load images and other assets
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      // Load fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Template for the HTML file
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, ''), // The directory where the server will serve files from
    },
    compress: true,  // Enable gzip compression for everything served
    port: 9000,      // Set the port number for the dev server
    open: true,      // Automatically open the browser when the server starts
    hot: true,       // Enable Hot Module Replacement (HMR)
    historyApiFallback: true,  // Serves index.html in place of 404 responses for single-page applications
  },
};