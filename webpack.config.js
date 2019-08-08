const path = require('path');   
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',                                  
  entry: path.resolve(__dirname, './src/index.js'),     
  output: {                                            
    path: path.resolve(__dirname, './dist'),
    filename: 'bunlde.js',
    publicPath:"/"
  },
  resolve: {
    extensions: ['.js', '.jsx','.json'],

  },
  devServer: {                                         
    contentBase: path.join(__dirname, 'dist'),           
    compress: true,
    port: 9000,
    historyApiFallback:true
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
            presets: ['es2017', 'react'],
            plugins: [//修改这里的
              ["import", {libraryName: "antd", style: "css"}]//修改这里的
          ] //修改这里的
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