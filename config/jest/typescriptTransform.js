// Copyright 2004-present Facebook. All Rights Reserved.

const tsc = require('typescript');
const babel = require('babel-core');
const tsconfig = require('../../tsconfig.json')
const babelrc = JSON.parse(require('fs').readFileSync('.babelrc', 'utf8'))

module.exports = {
  process(src, path) {
    if (path.endsWith('.ts') || path.endsWith('.tsx')) {
      es6Code = tsc.transpile(
        src,
        tsconfig.compilerOptions,
        path,
        []
      );
      return babel.transform(
        es6Code,
        babelrc
      ).code;
    }
    return src;
  },
};
