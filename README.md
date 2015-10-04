jscs-cappuccino
===============

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

A plugin that provides [`jscs`][] with a `cappuccino` code style preset.


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


[`jscs`]: http://jscs.info/

[npm-url]: https://npmjs.org/package/jscs-cappuccino
[npm-image]: http://img.shields.io/npm/v/jscs-cappuccino.svg?style=flat

[travis-url]: https://travis-ci.org/cappuccino/jscs-cappuccino
[travis-image]: https://travis-ci.org/cappuccino/jscs-cappuccino.svg?branch=master
