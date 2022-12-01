const nav = document.querySelector('.navigation');
const navBtn = document.querySelector('.hamburger');
const links = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('.hamburger-inner');
const footerYear = document.querySelector('.footer-year');
const formBtn = document.querySelector('.form-btn');
const mobileNavigation = document.querySelector('.navigation');

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
			} else if (item.classList.contains('slick-active') &&
            item.classList.contains('slick-current') &&
            item.classList.contains('slick-active') &&
            item.dataset.slickIndex === '3') {
                item.style.color = '#7f12f9';
            } else if (item.classList.contains('slick-active') &&
            item.classList.contains('slick-current') &&
            item.classList.contains('slick-active') &&
            item.dataset.slickIndex === '4') {
                item.style.color = 'grey';
            } else if (item.classList.contains('slick-active') &&
            item.classList.contains('slick-current') &&
            item.classList.contains('slick-active') &&
            item.dataset.slickIndex === '5') {
                item.style.color = '#f15a1f'
            }
            else {
				item.style.color = 'antiquewhite';
			}
		});
	}, 100);
};

// PRÓBA
const box = document.querySelector('.box');
const squares = 875;

let sliderValue = 40;
let range = 200;
//PRÓBA

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

navBtn.addEventListener('click', handleNav);
formBtn.addEventListener('click', addPulseAnimation);

createSquare();
checkSlick();
handleCurrentYear();
