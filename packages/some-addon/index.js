'use strict';

// eslint-disable-next-line node/no-unpublished-require
const BroccoliDebug = require('broccoli-debug');
const debugTree = BroccoliDebug.buildDebugCallback(`example`);

let counter = 0;
class SpecialSauce {
  get name() {
    return 'special-sauce';
  }

  get count() {
    return counter++;
  }

  toTree(tree) {
    const output = debugTree(tree, `toTree[${this.count}]`);
    return output;
  }
}

module.exports = {
  name: require('./package').name,

  setupPreprocessorRegistry(type, registry) {
    if (type !== 'parent') {
      return;
    }

    registry.add('js', new SpecialSauce());
  },
};
