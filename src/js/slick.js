$(document).ready(function () {
	$('.slick-component').slick({
		centerMode: true,
		centerPadding: '10px',
		slidesToShow: 3,
		draggable: true,

		 
       
		prevArrow:
			"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
		nextArrow:
			"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1,
				},
			},
		],
	}).on('beforeChange', (event, slick, currentSlide, nextSlide) => {
		if (currentSlide !== nextSlide) {
			document.querySelectorAll('.slick-center + .slick-cloned').forEach((next) => {
				
				setTimeout(() => next.classList.add('slick-current', 'slick-center'));
				
			});
		}
	});

});



