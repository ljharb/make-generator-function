'use strict';

var test = require('tape');
var forEach = require('for-each');
var iterate = require('iterate-iterator');
var generators = require('../')();

test('generators supported', { skip: generators.length === 0 }, function (t) {
	forEach(generators, function (genFunction) {
		t.comment('genFunction: `' + genFunction + '`');
		t.equal(typeof genFunction, 'function', 'genFunction is function');
		t.deepEqual(iterate(genFunction()), [undefined], 'generator yields expected values');
	});

	t.end();
});

test('generators not supported', { skip: generators.length > 0 }, function (t) {
	t.deepEqual(generators, [], 'no generator functions');
	t.end();
});
