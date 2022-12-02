let nav;
let navBtn;
let links
let hamburger
let footerYear
let formBtn
let mobileNavigation
let box

const squares = 875;
let sliderValue = 40;
let range = 200;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
	createSquare();
	checkSlick();
	handleCurrentYear();
};

const prepareDOMElements = () => {
	nav = document.querySelector('.navigation');
	navBtn = document.querySelector('.hamburger');
	links = document.querySelectorAll('.nav-link');
	hamburger = document.querySelector('.hamburger-inner');
	footerYear = document.querySelector('.footer-year');
	formBtn = document.querySelector('.form-btn');
	mobileNavigation = document.querySelector('.navigation');
	box = document.querySelector('.box');
}

const prepareDOMEvents = () => {
	navBtn.addEventListener('click', handleNav);
	formBtn.addEventListener('click', addPulseAnimation);
	
}



const checkSlick = () => {
	setInterval(() => {
		const center = document.querySelectorAll('.slick-element');

		center.forEach((item) => {
			if (
				item.classList.contains('slick-active') &&
				item.classList.contains('slick-current') &&
				item.classList.contains('slick-active') &&
				item.dataset.slickIndex === '0'
			) {
				item.style.color = '#e44d26';
			} else if (
				item.classList.contains('slick-active') &&
				item.classList.contains('slick-current') &&
				item.classList.contains('slick-active') &&
				item.dataset.slickIndex === '1'
			) {
				item.style.color = '#0096dc';
			} else if (
				item.classList.contains('slick-active') &&
				item.classList.contains('slick-current') &&
				item.classList.contains('slick-active') &&
				item.dataset.slickIndex === '2'
			) {
				item.style.color = 'gold';
			} else if (
				item.classList.contains('slick-active') &&
				item.classList.contains('slick-current') &&
				item.classList.contains('slick-active') &&
				item.dataset.slickIndex === '3'
			) {
				item.style.color = '#7f12f9';
			} else if (
				item.classList.contains('slick-active') &&
				item.classList.contains('slick-current') &&
				item.classList.contains('slick-active') &&
				item.dataset.slickIndex === '4'
			) {
				item.style.color = 'black';
				item.children[0].style.textShadow = '0 0 2px white';
			} else if (

				item.classList.contains('slick-active') &&
				item.classList.contains('slick-current') &&
				item.classList.contains('slick-active') &&
				item.dataset.slickIndex === '5'
			) {
				item.style.color = '#f15a1f';
			} else if (
				item.classList.contains('slick-active') &&
				item.classList.contains('slick-current') &&
				item.classList.contains('slick-active') &&
				item.dataset.slickIndex === '6'
			) {
				item.style.color = '#d94446';
			} else {
				item.style.color = 'antiquewhite';	
			}	
		});
	}, 150);
};


const handleNav = () => {
	navBtn.classList.toggle('is-active');
	nav.classList.toggle('navigation--active');
	document.body.classList.toggle('sticky-body');

	links.forEach((item) => {
		item.addEventListener('click', () => {
			mobileNavigation.classList.remove('navigation--active');
			navBtn.classList.remove('is-active');
			document.body.classList.remove('sticky-body');
		});
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

const addPulseAnimation = (e) => {
	const top = e.clientY;
	const left = e.clientX;

	const btnTopPosition = top - e.target.getBoundingClientRect().top;
	const btnLeftPosition = left - e.target.offsetLeft;

	const circle = document.createElement('span');
	circle.classList.add('circle');

	e.target.appendChild(circle);
	circle.style.top = btnTopPosition + 'px';
	circle.style.left = btnLeftPosition + 'px';

	setTimeout(() => {
		circle.remove();
	}, 800);
};


// PRÓBA

const createSquare = () => {
	for (let i = 0; i < squares; i++) {
		const square = document.createElement('div');
		square.classList.add('square');
		box.append(square);

		square.addEventListener('mouseover', () => setColor(square));
		square.addEventListener('mouseout', () => removeColor(square));
	}
};

const setColor = (square) => {
	const h = Math.floor(Math.random() * 60) + range;

	square.addEventListener('click', () => {
		range = Math.floor(Math.random() * 360);
	});
	const s = sliderValue + '%';
	const l = '50%';

	square.style.backgroundColor = `hsl(${h},${s},${l})`;
	// square.classList.add('animation-rotate')

	// setTimeout(() => {
	// 	square.classList.remove('animation-rotate')
	// }, 2000);
};

const removeColor = (square) => {
	square.style.backgroundColor = 'transparent';
};

// PRÓBA


document.addEventListener('DOMContentLoaded', main);
