$(document).ready(function () {
	$('.slick-component')
		.slick({
			centerMode: true,
			centerPadding: '10px',
			slidesToShow: 3,

			prevArrow:
				"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
			nextArrow:
				"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						centerMode: true,
						centerPadding: '0px',
						slidesToShow: 3,
					},
				},

				{
					breakpoint: 768,
					settings: {
						arrows: false,
						autoplay: true,
						autoplaySpeed: 2500,
						centerMode: true,
						centerPadding: '10px',
						slidesToShow: 3,
					},
				},
				{
					breakpoint: 480,
					settings: {
						arrows: false,
						autoplay: true,
						autoplaySpeed: 2500,
						centerMode: true,
						centerPadding: '0px',
						slidesToShow: 3,
					},
				},
			],
		})
		.on('beforeChange', (event, slick, currentSlide, nextSlide) => {
			if (currentSlide !== nextSlide) {
				document
					.querySelectorAll('.slick-center + .slick-cloned')
					.forEach((next) => {
						setTimeout(() =>
							next.classList.add('slick-current', 'slick-center')
						);
					});
			}
		});
});
