// Toggle Menu
function toggleMenu() {
    var elem = document.getElementById("navBar");
        elem.classList.toggle("active");  
}

$(document).ready(function () {
    $('.brands-carousel').slick({
		dots: false,
		slidesToShow: 4,
		arrows: false,
		slidesToScroll: 4,
		centerMode: true,
		centerPadding: '40px',
		draggable: true,
		autoplay: true,
		autoplaySpeed: 0,
		infinite: true,
		arrows: false,
		speed: 5000,
		easing: 'linear',
		responsive: [{
			breakpoint: 800,
			settings: {
				arrows: true,
				slidesToScroll: 2,
				centerMode: true,
				centerPadding: '20px',
				slidesToShow: 2
			}
		},
		{
			breakpoint: 560,
			settings: {
				arrows: false,
				centerMode: true,
				slidesToScroll: 1,
				centerPadding: '50px',
				slidesToShow: 1
			}
		},
		{
			breakpoint: 400,
			settings: {
				arrows: false,
				centerMode: true,
				slidesToScroll: 1,
				centerPadding: '25px',
				slidesToShow: 1
			}
		}
		]
	});
});