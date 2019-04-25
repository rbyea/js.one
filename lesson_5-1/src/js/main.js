'use strict';

let btnStart = document.getElementById('start'),
		btnBudget = document.getElementsByClassName('budget-value'),
		btnDayBudget = document.getElementsByClassName('daybudget-value'),
		lvlValue = document.getElementsByClassName('level-value'),
		exValue = document.getElementsByClassName('expenses-value'),
		opExValue = document.getElementsByClassName('optionallexpenses-value'),
		comeValue = document.getElementsByClassName('income-value'),
		monthValue = document.getElementsByClassName('monthsavings-value'),
		yearValue = document.getElementsByClassName('yearsavings-value'),
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

console.log(btnDayBudget);