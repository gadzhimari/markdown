/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 */

import babel from 'rollup-plugin-babel';
const pkg = require('./package.json');

const config = {
  entry: 'src/index.js',
  plugins: [
    babel({
      babelrc: false,
      presets: [['@dlghq/dialog', {
        flow: true,
        helpers: true,
        modules: false,
        runtime: false
      }]]
    })
  ],
  sourceMap: true,
  external: Object.keys(pkg.dependencies),
  targets: [
    { dest: 'lib/markdown.js', format: 'cjs' },
    { dest: 'lib/markdown.es.js', format: 'es' }
  ]
};

export default config;
