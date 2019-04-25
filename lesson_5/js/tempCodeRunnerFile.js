let btn = document.getElementsByClassName('menu-item'),
		list = document.createElement('li'),
		menu = document.querySelector('.menu'),
		listTwo = document.getElementsByClassName('menu-item');

list.classList.add('menu-item');

list.textContent = 'Пятый пункт';

menu.appendChild(list);


console.log(listTwo);