const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js', // Entry point of your library
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: {
      name: 'NeutrinoUI', // Shorter library name
      type: 'umd',
    },
    globalObject: 'this', // Ensures compatibility in different environments
    clean: true,
  },
  externals: {
    // Exclude peer dependencies from the bundle
    react: 'react',
    'react-dom': 'react-dom',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Transpile JS and JSX files
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/, // Handle CSS files with Tailwind CSS
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve JS and JSX extensions
  },
  optimization: {
    usedExports: true, // Enables tree shaking
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css', // Output CSS file
    }),
  ],
};
