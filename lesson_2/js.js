'use strict';

let money = +prompt("Ваш бюджет на месяц?", ''),
		time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
	budjet: money,
	typeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	saving: false
};

for (let i = 0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется", '');

	if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
			&& a != '' && b != '' && a.length < 50) {
			console.log("done");
			appData.expenses[a] = b;
	} else if ( a || b === null && a || b === '' && a || b != true) {
		alert ("Введи цифру, зря голову ломал как тебя вернуть обратно?!?");
		i--;
	}

};


// не хочет возвращать, собака...

// let i = 0;

// do {
// 	let a = prompt('Введите обязательную статью расходов в этом месяце'),
// 			b = prompt('Во сколько обойдется?');

// 	if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
// 		&& a != '' && b != '' && a.length < 50) {
// 		console.log("done");
// 		appData.expenses[a] = b;
// 	} 
// 	i++;
// } while (i < 2)

// let i = 0;
// while (i < 2 ) {
// 	let a = prompt('Введите обязательную статью расходов в этом месяце'),
// 			b = prompt('Во сколько обойдется?');

// 	if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
// 		&& a != '' && b != '' && a.length < 50) {
// 		console.log("done");
// 		appData.expenses[a] = b;
// 		}
// 		i++;
// }



// тут вроде все гуд (только какой смысл использовать switch , если работает if?) 

// for (let i = 0; i < 2; i++) {
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 			b = prompt("Во сколько обойдется", '');

// 	if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
// 			&& a != '' && b != '' && a.length < 50) {
// 			console.log("done");
// 			appData.expenses[a] = b;
// 	} switch (true) {
// 		case (a || b === null ):
// 			alert("Вам нужно заполнить форму!");
// 			i--;
// 			break;
// 		case (a || b === ''):
// 			alert("Введите цифру!");
// 			i--;
// 			break;
// 		case ( a || b != true):
// 			alert("Введите цифру!");
// 			i--;
// 			break;
// 	}

// };




appData.moneyPerDay = appData.budjet / 30;

alert(appData.budjet / 30);

if(appData.moneyPerDay < 100) {
	console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
	console.log("Высокий уровень достатка");
} else {
	console.log("Произошла ошибка");
}

