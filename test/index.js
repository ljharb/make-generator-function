'use strict';

var test = require('tape');
var genFunction = require('../');

test('generators supported', { skip: !genFunction }, function (t) {
	t.equal(typeof genFunction, 'function', 'genFunction is function');
	t.equal(String(genFunction), 'function* () { var x = yield; return x || 42; }', 'genFunction has expected body');

	t.test('concise methods supported', { skip: !genFunction.concise }, function (st) {
		t.equal(typeof genFunction.concise, 'function', 'genFunction.concise is function');
		st.end();
	});

	t.test('concise methods not supported', { skip: genFunction.concise }, function (st) {
		t.equal(typeof genFunction.concise, 'undefined', 'genFunction.concise is undefined');
		st.end();
	});

	t.end();
});

test('generators not supported', { skip: genFunction }, function (t) {
	t.equal(typeof genFunction, 'undefined', 'genFunction is undefined');
	t.end();
});
