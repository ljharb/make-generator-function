'use strict';

var makeGeneratorFunction = function () {
	return Function('return function* () { var x = yield; return x || 42; }')();
};
var generatorFunc;
try { generatorFunc = makeGeneratorFunction(); } catch (e) {}

module.exports = generatorFunc;


