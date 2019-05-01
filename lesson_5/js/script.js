'use strict';

let btn = document.getElementsByClassName('menu-item'),
		list = document.createElement('li'),
		menu = document.querySelector('.menu'),
		advert = document.querySelector('.adv'),
		columns = document.getElementsByClassName('column'),
		titles = document.getElementById('title');


list.classList.add('menu-item');
list.textContent = 'Пятый пункт';
menu.appendChild(list);
menu.insertBefore(btn[2], btn[1]);

titles.textContent = 'Мы продаем только подлинную технику Apple';

columns[1].removeChild(advert);

document.body.style.background = 'url("img/apple_true.jpg")';

window.onload = function () {
	let questionText = document.getElementById('prompt');
	question = prompt('Как вы относитесь к технике apple ?', ''),
		questionText.textContent = `${question}`;
};