jscs-cappuccino
===============

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependencies status][dependencies-image]][dependencies-url]

A plugin that provides [jscs][] with a [cappuccino][] code style preset.


## Installation

First you need to install `jscs`:

```
$ npm install -g jscs
```

Next, install `jscs-cappuccino`:

```
$ npm install jscs-cappuccino --save-dev
```

Finally, add a `.jscsrc` file to your project root (if you don't have one already) and add the following items:

```json
{
    "plugins": ["jscs-cappuccino"],
    "preset": "cappuccino"
}
```


[cappuccino]: http://cappuccino.org
[jscs]: http://jscs.info/

[npm-image]: http://img.shields.io/npm/v/jscs-cappuccino.svg?style=flat-square
[npm-url]: https://npmjs.org/package/jscs-cappuccino

[travis-image]: https://img.shields.io/travis/cappuccino/jscs-cappuccino.svg?style=flat-square
[travis-url]: https://travis-ci.org/cappuccino/jscs-cappuccino

[dependencies-image]: https://img.shields.io/gemnasium/cappuccino/jscs-cappuccino.svg?style=flat-square
[dependencies-url]: https://gemnasium.com/cappuccino/jscs-cappuccino#development-dependencies
