window.addEventListener('DOMContentLoaded', function () {
	'use strict';
//табы
	let tab = document.querySelectorAll('.info-header-tab'),
			info = document.querySelector('.info-header'),
			tabContent = document.querySelectorAll('.info-tabcontent');

	function hideTabs(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');

		};
	}
	hideTabs(1);

	function showTabs(b) {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		};
	}

	info.addEventListener('click', function (event) {
		let target = event.target;
		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabs(0);
					showTabs(i);
					break;
				}
			};

		};
	});

	//таймера
	let deadLine = '2019-05-31',
			actionTitle = document.querySelector('.timer-title'),
			actionTitle2 = document.querySelector('.timer-action');

	function getTimeRemaining(end) {
		let t = Date.parse(end) - Date.parse(new Date()),
				secs = Math.floor((t / 1000) % 60),
				mins = Math.floor((t / 1000 / 60) % 60),
				hours = Math.floor(t / (1000 * 60 * 60));

		if (mins < 10) {
			mins = '0' + mins;
		};

		if (secs < 10) {
			secs = '0' + secs;
		};

		//отчет после нуля
		if (hours < 0) {
			hours = '00';
			mins = '00';
			secs = '00';
		}

		return {
			total: t,
			hours: hours,
			mins: mins,
			secs: secs
		}
	};

	function setClock(id, end) {
		let timer = document.getElementById(id),
				hours = timer.querySelector('.hours'),
				minutes = timer.querySelector('.minutes'),
				seconds = timer.querySelector('.seconds'),
				timeInterval = setInterval(updateClock, 1000);

		function updateClock() {
			let t = getTimeRemaining(end);
			hours.textContent = t.hours;
			minutes.textContent = t.mins;
			seconds.textContent = t.secs;
			actionTitle2.textContent = '';

			if (t.total <= 0) {
				clearInterval(timeInterval);
			};

		};

	}

	setClock('timer', deadLine);

	// modal
	let more = document.querySelector('.more'),
			overlay = document.querySelector('.overlay'),
			closeModal = document.querySelector('.popup-close'),
			descrBtns = document.querySelectorAll('.description-btn');

	function bindModal() {
		more.addEventListener('click', function () {
			overlay.style.display = 'block';
			this.classList.add('more-splash');
			document.body.style.overflow = 'hidden';
		})

		descrBtns.forEach(function (element, index) {
			element.addEventListener('click', function () {
				overlay.style.display = 'block';
				document.body.style.overflow = 'hidden';
			})

			closeModal.addEventListener('click', function () {
				overlay.style.display = 'none';
				more.classList.remove('more-splash');
				document.body.style.overflow = '';
			})
		});
	};

	bindModal();

});
//скролл

let linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
	V = 0.4;  // скорость
for (let i = 0; i < linkNav.length; i++) {
	linkNav[i].addEventListener('click', function (e) { //по клику на ссылку
		e.preventDefault(); //отменяем стандартное поведение
		let w = window.pageYOffset,  // производим прокрутку
			hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
		t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
			start = null;
		requestAnimationFrame(step);
		function step(time) {
			if (start === null) start = time;
			let progress = time - start,
				r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
			window.scrollTo(0, r);
			if (r != w + t) {
				requestAnimationFrame(step)
			} else {
				location.hash = hash
			}
		}
	}, false);
}

