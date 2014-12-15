'use strict';

var test = require('tape');
var genFunction = require('../');

test('genFunction is undefined or a generator', function (t) {
	if (genFunction) {
		t.equal(typeof genFunction, 'function', 'genFunction is function');
		t.equal(String(genFunction), 'function* () { var x = yield; return x || 42; }', 'genFunction has expected body');
	} else {
		t.equal(typeof genFunction, 'undefined', 'genFunction is undefined');
	}
	t.end();
});

