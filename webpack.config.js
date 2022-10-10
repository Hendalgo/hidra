const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js' 
  },
  mode: 'development',
  resolve:{
    extensions: ['.js', '.jsx'],
    alias: {
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@libs': path.resolve(__dirname, 'src/libs'),
      '@assets': path.resolve(__dirname, 'src/assets')
    }
  },
  module:{
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader'
        }
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.(css)$/,
        use:['style-loader','css-loader']
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use:[
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  devServer:{
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
  ],
}