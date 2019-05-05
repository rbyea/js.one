'use strict';

let startTime = function () {
	let time = new Date(),
		timer = document.querySelector('.time'),
		hour = ('0' + time.getHours()).slice(-2),
		min = ('0' + time.getMinutes()).slice(-2),
		sec = ('0' + time.getSeconds()).slice(-2);

	timer.textContent = (hour + ' : ' + min + ' : ' + sec);
};

setInterval (startTime);