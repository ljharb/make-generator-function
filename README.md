#make-generator-function <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![Build Status][travis-svg]][travis-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

[![browser support][testling-svg]][testling-url]

Returns an arbitrary generator function, or undefined if generator syntax is unsupported.

## Example
```js
var maybeGeneratorFunction = require('make-generator-function');
if (maybeGeneratorFunction) {
	assert(typeof maybeGeneratorFunction === 'function');
} else {
	assert(typeof maybeGeneratorFunction === 'undefined');
}
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/make-generator-function
[npm-version-svg]: http://vb.teelaun.ch/ljharb/make-generator-function.svg
[travis-svg]: https://travis-ci.org/ljharb/make-generator-function.svg
[travis-url]: https://travis-ci.org/ljharb/make-generator-function
[deps-svg]: https://david-dm.org/ljharb/make-generator-function.svg
[deps-url]: https://david-dm.org/ljharb/make-generator-function
[dev-deps-svg]: https://david-dm.org/ljharb/make-generator-function/dev-status.svg
[dev-deps-url]: https://david-dm.org/ljharb/make-generator-function#info=devDependencies
[testling-svg]: https://ci.testling.com/ljharb/make-generator-function.png
[testling-url]: https://ci.testling.com/ljharb/make-generator-function
[npm-badge-png]: https://nodei.co/npm/make-generator-function.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/make-generator-function.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/make-generator-function.svg
[downloads-url]: http://npm-stat.com/charts.html?package=make-generator-function

