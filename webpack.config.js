const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', 'pdf', '.json', '.css', '.scss', 'png'],
        modules: ['src', 'node_modules'] 
    },
    output: {
        filename: 'index_bundle.js',
        path: path.resolve(__dirname, 'dist')

     },
    devServer: {
       port: 8001
    },
    module: {
       rules: [
          {
             test: /\.jsx?$/,
             loader: 'babel-loader',
             options: {
                "presets": ["@babel/preset-react"]
            }
          }, 
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',

          },
          {
            test: /\.pdf$/,
            use: ["file-loader"],
          },
    ]
    },
    plugins:[
       new HtmlWebpackPlugin({
          template: './public/index.html'
       })
    ]
 }