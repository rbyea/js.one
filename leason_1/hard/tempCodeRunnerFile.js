'use strict';

let num = '33721',
	multiplicationNum = num[0] * num[1] * num[2] * num[3] * num[4],
	baseNum = multiplicationNum;

for (let i = 2; i <= 3; i++) {
	multiplicationNum *= baseNum;
}