class MySite {
	constructor() {
		this.DOMElems = [];
		this.navigationLinks = [];
		this.direction = -1;
		this.interval = setInterval(this.nextArrowFunction, 2800);
		this.initApp();
	}

	initApp = () => {
		this.prepareDOMElements();
		this.prepareDOMListeners();
		this.handleCurrentYear();
	};

	prepareDOMElements = () => {
		const elements = Array.from(document.querySelectorAll('[data-bind-js]'));

		for (const element of elements) {
			if (
				element.dataset.bindJs !== 'link1' &&
				element.dataset.bindJs !== 'link2' &&
				element.dataset.bindJs !== 'link3'
			) {
				this.DOMElems[element.dataset.bindJs] = element;
			} 
			else {
				this.navigationLinks[element.dataset.bindJs] = element;
			}
		}
	};

	prepareDOMListeners = () => {
		this.DOMElems.navBtn.addEventListener('click', this.handleNav);
		this.DOMElems.formBtn.addEventListener('click', this.addPulseAnimation);
		this.DOMElems.nextArrow.addEventListener('click', this.nextA);
		this.DOMElems.prevArrow.addEventListener('click', this.prevA);
		this.DOMElems.slider.addEventListener('transitionend', this.sliderTransitionEnd);
	};

	handleNav = () => {
		this.DOMElems.navBtn.classList.toggle('is-active');
		this.DOMElems.navigation.classList.toggle('navigation--active');
		document.body.classList.toggle('sticky-body');

		Object.values(this.navigationLinks).forEach((item) => {
			item.addEventListener('click', () => {
				this.DOMElems.navigation.classList.remove('navigation--active');
				this.DOMElems.navBtn.classList.remove('is-active');
				document.body.classList.remove('sticky-body');
			});
		});
	};

	nextArrowFunction = () => {
		if (this.direction === 1) {
			this.DOMElems.slider.prepend(this.DOMElems.slider.lastElementChild);
		}
		this.direction = -1;
		this.DOMElems.carousel.style.justifyContent = 'flex-start';
		this.DOMElems.slider.style.transform = 'translate(-12.5%)';
	};

	prevArrowFunction = () => {
		if (this.direction === -1) {
			this.DOMElems.slider.append(this.DOMElems.slider.firstElementChild);
			this.direction = 1;
		}
		this.DOMElems.carousel.style.justifyContent = 'flex-end';
		this.DOMElems.slider.style.transform = 'translate(12.5%)';
	};

	sliderTransitionEnd = () => {
		if (this.direction === -1) {
			this.DOMElems.slider.append(this.DOMElems.slider.firstElementChild);
		} else if (this.direction === 1) {
			this.DOMElems.slider.prepend(this.DOMElems.slider.lastElementChild);
		}

		this.DOMElems.slider.style.transition = 'none';
		this.DOMElems.slider.style.transform = 'translate(0)';
		setTimeout(() => {
			this.DOMElems.slider.style.transition = 'transform 0.8s';
		});
	};

	addPulseAnimation = (e) => {
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

	nextA = () => {
		this.nextArrowFunction();
		this.resetInterval();
	};
	
	prevA = () => {
		this.prevArrowFunction();
		this.resetInterval();
	};
	
	resetInterval = () => {
		clearInterval(this.interval);
		this.interval = setInterval(this.nextArrowFunction, 2800);
	};

	handleCurrentYear = () => {
		const year = new Date().getFullYear();
		this.DOMElems.footerYear.innerText = year;
	};
}

document.addEventListener('DOMContentLoaded', new MySite());
