'use strict';

let btn = document.getElementsByClassName('menu-item'),
		list = document.createElement('li'),
		menu = document.querySelector('.menu'),
		advert = document.querySelector('.adv'),
		columns = document.getElementsByClassName('column'),
		question = prompt('Как вы относитесь к технике apple ?', ''),
		questionText = document.getElementById('prompt'),
		titles = document.getElementById('title');

list.classList.add('menu-item');
list.textContent = 'Пятый пункт';
menu.appendChild(list);
menu.insertBefore(btn[2], btn[1]);

titles.textContent = 'Мы продаем только подлинную технику Apple';

columns[1].removeChild(advert);

document.body.style.background = 'url("img/apple_true.jpg")';

questionText.textContent = `${question}`;