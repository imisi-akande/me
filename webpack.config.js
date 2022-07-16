const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', 'pdf', '.json', '.css', '.scss'],
        modules: ['src', 'node_modules'] 
    },
    output: {
       path: path.join(__dirname, '/bundle'),
       filename: 'index_bundle.js'
    },
    devServer: {
       port: 8001
    },
    module: {
       rules: [
          {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',

          }, 
          {
            test: /\.pdf$/,
            use: ["file-loader"],
          },
          {
          test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
        ],
    }]
    },
    plugins:[
       new HtmlWebpackPlugin({
          template: './public/index.html'
       })
    ]
 }