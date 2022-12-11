let nav;
let navBtn;
let links;
let hamburger;
let footerYear;
let formBtn;
let mobileNavigation;
let slider;
let carousel;
let prev;
let next;

let direction = -1;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
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
	slider = document.querySelector('.slider');
	carousel = document.querySelector('.carousel');
	prev = document.querySelector('.prev');
	next = document.querySelector('.next');
};

const prepareDOMEvents = () => {
	navBtn.addEventListener('click', handleNav);
	formBtn.addEventListener('click', addPulseAnimation);
	next.addEventListener('click', nextArrowFunction);
	prev.addEventListener('click', prevArrowFunction);
	slider.addEventListener('transitionend', sliderTransitionEnd);
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

const nextArrowFunction = () => {
	if (direction === 1) {
		slider.prepend(slider.lastElementChild);
	}
	direction = -1;
	carousel.style.justifyContent = 'flex-start';
	slider.style.transform = 'translate(-14.28%)';
};

const prevArrowFunction = () => {
	if (direction === -1) {
		slider.append(slider.firstElementChild);
		direction = 1;
	}
	carousel.style.justifyContent = 'flex-end';
	slider.style.transform = 'translate(14.28%)';
};

const sliderTransitionEnd = () => {
	if (direction === -1) {
		slider.append(slider.firstElementChild);
	} else if (direction === 1) {
		slider.prepend(slider.lastElementChild);
	}

	slider.style.transition = 'none';
	slider.style.transform = 'translate(0)';
	setTimeout(() => {
		slider.style.transition = 'transform 0.8s';
	});
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


const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

document.addEventListener('DOMContentLoaded', main);
