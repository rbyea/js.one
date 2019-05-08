'use strict';

let age = document.getElementById('age');

function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

age.addEventListener('blur', function () {
	showUser.call(age, 'Новиков', 'Егор');
});