'use strict';


//старт первой функции :D
let money , time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt("Введите дату в формате YYYY-MM-DD", '');

	while(isNaN(money) || money == '' || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
}

start();

//тип данных 
let appData = {
	budjet: money,
	typeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true
};

// Расходы
function chooseExpenses() {
	for (let i = 0; i < 2; i++) {
		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется", '');

		if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null
			&& a != '' && b != '' && a.length < 50) {
			console.log("done");
			appData.expenses[a] = b;
		} else if (a || b === null && a || b === '' && a || b != true) {
			alert("Введи цифру, зря голову ломал как тебя вернуть обратно?!?");
			i--;
		}
	};
}

chooseExpenses();


// Расчет ежеджевного бюджета
function detectDayBudget() {
	appData.moneyPerDay = (appData.budjet / 30).toFixed();

	alert(appData.budjet / 30 + " - это ваш ежедневный бюджет!");
}

detectDayBudget();

// уровень дохода
function detectLevel() {
	if (appData.moneyPerDay < 100) {
		console.log("Минимальный уровень достатка");
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		console.log("Средний уровень достатка");
	} else if (appData.moneyPerDay > 2000) {
		console.log("Высокий уровень достатка");
	} else {
		console.log("Произошла ошибка");
	}

}

detectLevel();

// накопительная функция
function checkSavings(){
		if (appData.savings == true) {
			let save = +prompt("Какова сумма накоплений?"),
					percent = +prompt("Под какой процент?");

			appData.momthIncome = save/100/12*percent;
			alert("Доход в месяц с вашего депозита: " + appData.momthIncome);
		}
}

checkSavings();

//три вопроса про "необзятальеные расходы"

let question;

function chooseOptExpenses(){
	appData.optionalExpenses = {};

	for (let i = 0; i < 3; i++) {
		question = prompt("Статья необязательных расходов?");
		if (question  == null || question == '') {
			i--;
			alert('Заполните поля', '');
			continue;
		}
		appData.optionalExpenses[i+1] = question;
	
	}
}
chooseOptExpenses();



// не хочет возвращать, собака..

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
