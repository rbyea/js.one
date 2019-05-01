'use strict';

let btnStart = document.getElementById('start'),
		btnBudget = document.getElementsByClassName('budget-value')[0],
		btnDayBudget = document.getElementsByClassName('daybudget-value')[0],
		lvlValue = document.getElementsByClassName('level-value')[0],
		exValue = document.getElementsByClassName('expenses-value')[0],
		opExValue = document.getElementsByClassName('optionalexpenses-value')[0],
		comeValue = document.getElementsByClassName('income-value')[0],
		monthValue = document.getElementsByClassName('monthsavings-value')[0],
		yearValue = document.getElementsByClassName('yearsavings-value')[0],

		inputList = document.getElementsByClassName('expenses-item'),
		expensesBtn = document.getElementsByTagName('button')[0],
		optionalExpensesBtn = document.getElementsByTagName("button")[1],
		countBtn = document.getElementsByTagName("button")[2],
		optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
		incomeItem = document.querySelector(".choose-income"),
		checkSavings = document.querySelector("#savings"),
		sumValue = document.querySelector(".choose-sum"),
		percentValue = document.querySelector(".choose-percent"),
		yearsValue = document.querySelector(".year-value"),
		monthsValue = document.querySelector(".month-value"),
		dayValue = document.querySelector(".day-value");


//старт первой функции :D
let money, time, sum;

expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;


btnStart.addEventListener('click', function() {
	time = prompt("Введите дату в формате YYYY-MM-DD", '');
	money = +prompt("Ваш бюджет на месяц?", '');

	while (isNaN(money) || money == '' || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
	appData.budjet = money;
	appData.typeData = time;
	btnBudget.textContent = money.toFixed();
	yearsValue.value = new Date(Date.parse(time)).getFullYear();
	monthsValue.value = new Date(Date.parse(time)).getMonth() + 1;
	dayValue.value = new Date(Date.parse(time)).getDate();
	expensesBtn.disabled = false;
	optionalExpensesBtn.disabled = false;
	countBtn.disabled = false;
});

expensesBtn.addEventListener('click', function() {
	sum = 0;

	for (let i = 0; i < inputList.length; i++) {
		let a = inputList[i].value,
			b = inputList[++i].value;

		if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null
			&& a != '' && b != '' && a.length < 50) {
			console.log("done");
			appData.expenses[a] = b;
			sum += +b;
		} else if (a || b === null && a || b === '' && a || b != true) {
			
			i--;
		}
	}
	exValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function(){
	for (let i = 0; i < optionalExpensesItem.length; i++) {
		let question = optionalExpensesItem[i].value;
		appData.optionalExpenses[i] = question;
		opExValue.textContent += appData.optionalExpenses[i] + ' ';
	}
});

countBtn.addEventListener('click', function(){
	
	if(appData.budjet != undefined) {
		appData.moneyPerDay = ((appData.budjet - sum)/30).toFixed();
		btnDayBudget.textContent = appData.moneyPerDay;

		if (appData.moneyPerDay < 100) {
			lvlValue.textContent = "Минимальный уровень достатка";
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			lvlValue.textContent = "Средний уровень достатка";
		} else if (appData.moneyPerDay > 2000) {
			lvlValue.textContent = "Высокий уровень достатка";
		} else {
			lvlValue.textContent = "Произошла ошибка";
		}
	} else {
		btnDayBudget.textContent = "Произошла ошибка";
	}
});

incomeItem.addEventListener('input', function() {
	let items = incomeItem.value;
	appData.income = items.split(', ');
	comeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
	if (appData.savings == true){
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});

sumValue.addEventListener('input', function(){
	if (appData.savings == true) {
		let sum = +sumValue.value,
			percent = +percentValue.value;

		appData.monthIncome = sum / 100 / 12 * percent;
		appData.yearincome = sum / 100 * percent;

		monthsValue.textContent = appData.monthIncome.toFixed(1);
		yearsValue.textContent = appData.monthIncome.toFixed(1);
	}
});

percentValue.addEventListener('input', function(){
	if (appData.savings == true) {
		let sum = +sumValue.value,
			percent = +percentValue.value;

		appData.monthIncome = sum / 100 / 12 * percent;
		appData.yearIncome = sum / 100 * percent;

		monthValue.textContent = appData.monthIncome.toFixed(1);
		yearValue.textContent = appData.yearIncome.toFixed(1);
	}
});

//тип данных 
let appData = {
	budjet: money,
	typeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

for (let key in appData) {
	console.log("Наша программа включает в себя данные:" + key + appData);
}
