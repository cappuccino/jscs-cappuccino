jscs-cappuccino
===============

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Build status][appveyor-image]][appveyor-url]

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

[npm-url]: https://npmjs.org/package/jscs-cappuccino
[npm-image]: http://img.shields.io/npm/v/jscs-cappuccino.svg

[travis-url]: https://travis-ci.org/cappuccino/jscs-cappuccino
[travis-image]: https://travis-ci.org/cappuccino/jscs-cappuccino.svg?branch=master

[appveyor-url]: https://ci.appveyor.com/project/aparajita/eslint-config-cappuccino
[appveyor-image]: https://ci.appveyor.com/api/projects/status/7dd45pxivdgdc473?svg=true
