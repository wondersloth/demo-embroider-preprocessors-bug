'use strict';

// eslint-disable-next-line node/no-extraneous-require
const { map } = require('broccoli-stew');
// eslint-disable-next-line node/no-unpublished-require
const BroccoliDebug = require('broccoli-debug');
let debugTree = BroccoliDebug.buildDebugCallback(
  'my-debug:some-addon-with-preprocessor'
);

function getUniqueId() {
  return Date.now();
}

module.exports = {
  name: require('./package').name,

  setupPreprocessorRegistry(type, registry) {
    if (type !== 'parent') {
      return;
    }

    registry.add('js', {
      name: 'special-path-processor',
      toTree(tree, inputPath) {
        if (inputPath !== '/') {
          return tree;
        }

        let augmented = map(
          tree,
          '**/*.{js,css}',
          function (content, relativePath) {
            return `/*path@${relativePath}*/\n${content}`;
          }
        );
        augmented = debugTree(augmented, `toTree[${getUniqueId()}]`);
        return augmented;
      },
    });
  },
};
