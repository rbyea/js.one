'use strict'

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let questionOne = prompt("Введите обязательную статью расходов в этом месяце");
let questionTwo = prompt("Во сколько обойдется");
let payment = money/30;

let appData = {
	budjet: money,
	typeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	saving: false
};

let moneyData = questionOne,
typeDate = questionTwo;

appData.expenses[moneyData] = typeDate;

alert('Бюджет на один день' + payment);