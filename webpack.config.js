const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: {
    'server': './src/server.ts',
    'server.test': './src/server.test.ts'
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      'main.server': path.join(__dirname, 'dist', 'server', 'main.js')
    }
  },
  target: 'node',
  externals: [nodeExternals()],
  output: {
    library: 'fabrixApp',
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.server.json'
            }
          }
        ]
      }
    ]
  }
}
