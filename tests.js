import {isFiniteNumber, notFiniteNumber} from './index.js';


if (isFiniteNumber(1))
	console.log('test 1 passed');
else
	console.log('test 1 FAILED');


if (isFiniteNumber(1.000001))
	console.log('test 2 passed');
else
	console.log('test 2 FAILED');


if (isFiniteNumber(Number.MIN_VALUE))
	console.log('test 2A passed');
else
	console.log('test 2A FAILED');


if (isFiniteNumber(Number.MAX_VALUE))
	console.log('test 2B passed');
else
	console.log('test 2B FAILED');


if (notFiniteNumber(NaN))
	console.log('test 3 passed');
else
	console.log('test 3 FAILED');


if (notFiniteNumber(Infinity))
	console.log('test 3A passed');
else
	console.log('test 3A FAILED');


if (notFiniteNumber('1'))
	console.log('test 4 passed');
else
	console.log('test 4 FAILED');


if (notFiniteNumber('1.000001'))
	console.log('test 6 passed');
else
	console.log('test 6 FAILED');


if (notFiniteNumber(Number.POSITIVE_INFINITY))
	console.log('test 7 passed');
else
	console.log('test 7 FAILED');
