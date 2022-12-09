let nav;
let navBtn;
let links
let hamburger
let footerYear
let formBtn
let mobileNavigation


let range = 200;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
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
				item.children[0].classList.contains('fa-html5')
				// item.dataset.slickIndex === '0'
			) {
				item.style.color = '#e44d26';
			} else if (
				item.classList.contains('slick-active') &&
				item.classList.contains('slick-current') &&
				item.classList.contains('slick-active') &&
				item.children[0].classList.contains('fa-css3-alt')
				// item.dataset.slickIndex === '1'
			) {
				item.style.color = '#0096dc';
			} else if (
				item.classList.contains('slick-active') &&
				item.classList.contains('slick-current') &&
				item.classList.contains('slick-active') &&
				item.children[0].classList.contains('fa-js')
				// item.dataset.slickIndex === '2'
			) {
				item.style.color = 'gold';
			} else if (
				item.classList.contains('slick-active') &&
				item.classList.contains('slick-current') &&
				item.classList.contains('slick-active') &&
				item.children[0].classList.contains('fa-bootstrap')
				// item.dataset.slickIndex === '3'
			) {
				item.style.color = '#7f12f9';
			} else if (
				item.classList.contains('slick-active') &&
				item.classList.contains('slick-current') &&
				item.classList.contains('slick-active') &&
				item.children[0].classList.contains('fa-github')
				// item.dataset.slickIndex === '4'
			) {
				item.style.color = 'black';
				item.children[0].style.textShadow = '0 0 2px white';
			} else if (

				item.classList.contains('slick-active') &&
				item.classList.contains('slick-current') &&
				item.classList.contains('slick-active') &&
				item.children[0].classList.contains('fa-ubuntu')
				// item.dataset.slickIndex === '5'
			) {
				item.style.color = '#f15a1f';
			} else if (
				item.classList.contains('slick-active') &&
				item.classList.contains('slick-current') &&
				item.classList.contains('slick-active') &&
				item.children[0].classList.contains('fa-gulp')
				// item.dataset.slickIndex === '6'
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
