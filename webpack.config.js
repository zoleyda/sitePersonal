module.exports = {
  entry: [
    './src/index.js',
    './src/jquery-plugins/jquery.scrollex.min.js',
    './src/jquery-plugins/jquery.scrolly.min.js',
    './src/jquery-plugins/util.js',
    './src/jquery-plugins/main.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
