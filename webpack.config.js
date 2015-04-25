module.exports = {
  entry: './app/main.js',
  output: {
    filename: 'build/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: ['node_modules', 'bower_components']
      }
    ]
  }
};
