const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',

    devServer: {
      static: {
        directory: path.join(__dirname, '../'),
      },
      compress: true,
      port: 9000,
      open: true,
      hot: true,
      historyApiFallback: true,
      proxy: [                                //?
        {
            context: ['/header', '/footer', '/pages'],
            target: 'http://localhost:3000',
            changeOrigin: true,
        }
      ]
    }    
});