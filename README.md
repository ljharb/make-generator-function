# make-generator-function <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Returns an array of arbitrary generator functions, which will be empty if generator syntax is unsupported.

## Example
```js
var generatorFunctions = require('make-async-generator-function');
assert(typeof generatorFunctions === 'function');

var funcs = generatorFunctions();
assert(Array.isArray(funcs), true);
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/make-generator-function
[npm-version-svg]: https://versionbadg.es/ljharb/make-generator-function.svg
[deps-svg]: https://david-dm.org/ljharb/make-generator-function.svg
[deps-url]: https://david-dm.org/ljharb/make-generator-function
[dev-deps-svg]: https://david-dm.org/ljharb/make-generator-function/dev-status.svg
[dev-deps-url]: https://david-dm.org/ljharb/make-generator-function#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/make-generator-function.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/make-generator-function.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/make-generator-function.svg
[downloads-url]: https://npm-stat.com/charts.html?package=make-generator-function
[codecov-image]: https://codecov.io/gh/ljharb/make-generator-function/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/ljharb/make-generator-function/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/ljharb/make-generator-function
[actions-url]: https://github.com/ljharb/make-generator-function/actions
