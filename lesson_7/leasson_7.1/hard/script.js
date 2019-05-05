'use strict';

let btn = document.querySelector('.btn'),
		image = document.querySelector('.img');

function poehaliEpta() {
	let position = 0;
	requestAnimationFrame(function frame() {
		if (position == 1000) {
			cancelAnimationFrame(frame);
		} else {
			position += 1;
			image.style.left = position + 'px';
			requestAnimationFrame(frame);
		}

	});
}

btn.addEventListener('click', poehaliEpta);