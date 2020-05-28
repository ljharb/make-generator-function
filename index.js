'use strict';

var getGenerators = function getGeneratorFunctions() {
	return [
		'return function* () { var x = yield; return x || 42; }',
		'return function* gen() { var x = yield; return x || 42; }',
		'return { *       concise(  ){ var x = yield; return x || 42; } }.concise;'
	];
};
var generatorFuncs = [];
var fns = getGenerators();
for (var i = 0; i < fns.length; ++i) {
	try {
		generatorFuncs.push(Function(fns[i])());
	} catch (e) { /**/ }
}

module.exports = function makeGeneratorFunction() {
	return generatorFuncs[0];
};
module.exports.list = function makeGeneratorFunctions() {
	return generatorFuncs.slice();
};
