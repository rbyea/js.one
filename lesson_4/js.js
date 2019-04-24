'use strict';


//старт первой функции :D
let money, time, question;

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
	savings: true,
	// Расходы
	chooseExpenses: function () {
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
		}
	},
	// Расчет ежеджевного бюджета
	detectDayBudget: function() {
		appData.moneyPerDay = (appData.budjet / 30).toFixed();
		alert(appData.moneyPerDay + " - это ваш ежедневный бюджет!");
	},
	// уровень дохода
	detectLevel: function() {
		if (appData.moneyPerDay < 100) {
			console.log("Минимальный уровень достатка");
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log("Средний уровень достатка");
		} else if (appData.moneyPerDay > 2000) {
			console.log("Высокий уровень достатка");
		} else {
			console.log("Произошла ошибка");
		}
	},
	// накопительная функция
	checkSavings: function(){
		if (appData.savings == true) {
			let save = +prompt("Какова сумма накоплений?"),
				percent = +prompt("Под какой процент?");

			appData.momthIncome = save / 100 / 12 * percent;
			alert("Доход в месяц с вашего депозита: " + appData.momthIncome);
		}
	},
	//три вопроса про "необзятальеные расходы"
	chooseOptExpenses: function() {
		appData.optionalExpenses = {};

		for (let i = 0; i < 3; i++) {
			question = prompt("Статья необязательных расходов?");
			if (question == null || question == '') {
				i--;
				alert('Заполните поля', '');
				continue;
			}
			appData.optionalExpenses[i + 1] = question;

		}
	},
	chooseIncome: function() {
		for (let i = 0; i < 1; i++) {
			let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');

			if ((typeof (items)) === 'string' && items != '' && (typeof (items)) != null) {
				appData.income = items.split(', ');
				appData.income.push(prompt("Может что-то еще?"));
				appData.income.sort();
				appData.income.forEach(function(item, i) {
					let number = i + 1;
					console.log(number + "Способы доп. заработка:" + item );
				});
			} else {
				i--;
			}
		}

	}
};

for (let key in appData) {
	console.log("Наша программа включает в себя данные:" + key  + appData);
}
