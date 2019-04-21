'use strict';

let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

for (let i = 0; i < week.length; i++) {
	if (week[i] === 'понедельник') {
		document.write('<i>' + week[i] + '</i>' + '<br>');
	} else if (week[i] === 'суббота' || week[i] === 'воскресенье') {
		document.write('<strong>' + week[i] + '</strong>' + '<br>');
	} else if (week[i] === 'вторник' || 'среда' || 'четверг' || 'пятница') {
		document.write(week[i] + '<br>');
	} 
}



//чета мне кажется, что это не верное :D

let arr = ['333', '322', '444', '876', '777', '554', '244'];
	arr.splice(2);

console.log(arr);
