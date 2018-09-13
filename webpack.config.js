const path = require('path');

module.exports = {
  entry: './Src/app.js',
  output: {
    path: path.join(__dirname, 'Public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/,
      query: {
        presets: ['es2017', 'react']
    }
    
    },{
      test:/\.s?css$/,
      use:[
        'style-loader',
        'css-loader',
        'sass-loader'
      ]

    }]
  },
  devtool:'cheap-eval-source-map',
  devServer:{
    contentBase:path.join(__dirname, './Public'),
    historyApiFallback:true
  }
};
