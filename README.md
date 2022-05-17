# embroider-preprocessors-bug

## Problem
In an **embroider** passes a tree to a registered preprocessor. The tree passed into the toTree method is not scoped to the `moduleName`

In **classic** builds ember-cli will namespace the tree passed into preprocessors:
https://github.com/ember-cli/ember-cli/blob/177f52340dcaa59cf27402ed77fda5e55860fd35/lib/models/addon.js#L1195

## Steps to Reproduce

From root: 
```bash
$ yarn install
```

Build Addon
```
$ cd packages/some-addon
$ yarn build;
```

```
$ cd packages/sample-app;
$ EMBROIDER=false BROCCOLI_DEBUG=example:* node ./node_modules/.bin/ember build
```
If you look into the debug directory you will see that the following structure:

## GOOD (Classic)

From the `sample-app` build set `EMBROIDER=true`

```bash
$ cd packages/sample-app
```

``` bash
$ EMBROIDER=false BROCCOLI_DEBUG=example:* node ./node_modules/.bin/ember build  
```

Inspect the `DEBUG` directory structure. Notice it contains a directory with the `moduleName`.

```bash
$ tree -L 4 ./DEBUG      
./DEBUG
└── example
    ├── toTree[0]
    │   └── sample-app <------- `moduleName`
    │       ├── adapters
    │       ├── app.js
    │       ├── component-managers
    │       ├── components
    │       ├── controllers
    │       ├── data-adapter.js
    │       ├── helpers
    │       ├── index.html
    │       ├── initializers
    │       ├── instance-initializers
    │       ├── models
    │       ├── router.js
    │       ├── routes
    │       ├── serializers
    │       ├── services
    │       ├── styles
    │       ├── templates
    │       └── transforms
    └── toTree[1]
        └── sample-app
            └── tests

20 directories, 4 files
```

## BAD (Embroider)

Run the build with embroider enabled.

```
$ EMBROIDER=true BROCCOLI_DEBUG=example:* node ./node_modules/.bin/ember build  
```

```bash
$ tree -L 3 ./DEBUG                                                           
./DEBUG
└── example
    ├── toTree[0] <--------- Notice no sub-dir with `moduleName`
    │   ├── app.js
    │   ├── components
    │   ├── controllers
    │   ├── helpers
    │   ├── models
    │   ├── router.js
    │   ├── routes
    │   ├── styles
    │   └── templates
    └── toTree[1]
        ├── components
        ├── styles
        └── tests

13 directories, 2 files
```