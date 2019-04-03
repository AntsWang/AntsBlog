const path = require('path');   
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',                                  
  entry: path.resolve(__dirname, './src/index.js'),     
  output: {                                            
    path: path.resolve(__dirname, './dist'),
    filename: 'bunlde.js'
  },
  devServer: {                                         
    contentBase: path.join(__dirname, 'dist'),           
    compress: true,
    port: 9000
  },
  module: {                                            
    rules: [                                          
      {                                               
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules'),
        use: {
          loader: 'babel-loader',                      
          options: {
            presets: ['es2017', 'react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']              
      }
    ]
  },
  plugins: [
    new cleanWebpackPlugin(),           
    new htmlWebpackPlugin({                              
      template: './index.html'
    })
  ]
};