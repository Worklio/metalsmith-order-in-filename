# metalsmith-order-in-filename [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]
A Metalsmith plugin to extract the order and title from filenames

## Features

- pulls `order` from filename
- creates `title` from filename, this is the rest from filename, and Capitalized Each Word 
- adds these properties to the file metadata

## Installation

```bash
$ npm install --save-dev metalsmith-order-in-filename
```

## Usage

### Get order and title of article in filenames

```bash
1 article title.md
2 another article title.md
```

### Configure your build

```javascript
import metalsmithOrderInFilename from 'metalsmith-order-in-filename'

metalsmith.use(metalsmithOrderInFilename())
```


[npm-image]: https://badge.fury.io/js/metalsmith-order-in-filename.svg
[npm-url]: https://npmjs.org/package/metalsmith-order-in-filename
[travis-image]: https://travis-ci.org/Worklio/metalsmith-order-in-filename.svg?branch=master
[travis-url]: https://travis-ci.org/Worklio/metalsmith-order-in-filename
