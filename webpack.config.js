const path = require('path');

const projectRoot = path.resolve(__dirname, './')

module.exports = {
  watch: true,
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public/js'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader',
            options: {
              presets: ["es2015", "stage-3"]
            }
          }
        }
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    modules: [
        "node_modules"
    ],
    alias: {
        vue: 'vue/dist/vue.common.js'
    }
  },
};
