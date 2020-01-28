'use strict';

module.exports = function getGeneratorFunctions() {
	var generatorFuncs = [];
	try {
		generatorFuncs.push(Function('return function* () { var x = yield; return x || 42; }')());
	} catch (e) {}
	try {
		generatorFuncs.push(Function('return function* gen() { var x = yield; return x || 42; }')());
	} catch (e) {}
	try {
		generatorFuncs.push(Function('return { *       concise(  ){ var x = yield; return x || 42; } }.concise;')());
	} catch (e) {}

	return generatorFuncs;
};
