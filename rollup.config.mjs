import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import path from 'path';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'esm', // ES Module format
      sourcemap: true,
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs', // CommonJS format
      sourcemap: true,
      exports: 'named',
    },
  ],
  plugins: [
    peerDepsExternal(),
    postcss({
      extract: path.resolve('dist/styles.css'), // Output CSS to 'styles.css'
      minimize: true,
      plugins: [],
    }),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: ['@babel/plugin-transform-runtime'],
    }),
    resolve({
      extensions: ['.js', '.jsx'],
    }),
    commonjs(),
  ],
  external: ['react', 'react-dom'],
};
