'use strict';

let money = prompt("Ваш бюджет на месяц?"),
		time = prompt("Введите дату в формате YYYY-MM-DD"),
		questionOne = prompt("Введите обязательную статью расходов в этом месяце"),
		questionTwo = prompt("Во сколько обойдется"),
		questionThree = prompt("Введите обязательную статью расходов в этом месяце"),
		questionFour = prompt("Во сколько обойдется");

let appData = {
	budjet: money,
	typeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	saving: false
};

appData.expenses[questionOne] = questionTwo;
appData.expenses[questionThree] = questionFour;

console.log(appData);

alert('Бюджет на один день' + money/30);