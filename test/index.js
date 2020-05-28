'use strict';

var test = require('tape');
var iterate = require('iterate-iterator');
var makeGeneratorFunction = require('../');

test('makeGeneratorFunction() is undefined or a generator function', function (t) {
	var genFunction = makeGeneratorFunction();
	if (genFunction) {
		t.equal(typeof genFunction, 'function', 'genFunction is function');
		t.equal(String(genFunction), 'function* () { var x = yield; return x || 42; }', 'genFunction has expected source');
	} else {
		t.equal(typeof genFunction, 'undefined', 'genFunction is undefined');
	}
	t.end();
});

test('makeGeneratorFunction.list() is an array', function (t) {
	var generators = makeGeneratorFunction.list();
	var expectedSources = [
		'function* () { var x = yield; return x || 42; }',
		'function* gen() { var x = yield; return x || 42; }',
		'*       concise(  ){ var x = yield; return x || 42; }'
	];
	t.plan(1 + (3 * generators.length));
	t.equal(Object.prototype.toString.call(generators), '[object Array]', 'list() is an array');
	if (generators.length === 0) {
		t.comment('no generator functions present');
	} else {
		for (var i = 0; i < generators.length; ++i) {
			var genFunction = generators[i];
			t.comment('genFunction: `' + genFunction + '`');
			t.equal(typeof genFunction, 'function', 'genFunction is a function');
			t.equal(String(genFunction), expectedSources[i], 'String(genFunction) === "' + expectedSources[i] + '"');
			t.deepEqual(iterate(genFunction()), [undefined], 'generator yields expected values');
		}
	}
	t.end();
});
