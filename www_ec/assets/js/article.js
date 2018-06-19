/*-------- スライド --------*/
var mySwiper = new Swiper('.swiper-container', {
	slidesPerView: 3,
	spaceBetween: 16,
	loop: true,
	pagination: ".swiper-pagination",
	paginationClickable: true,
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	breakpoints:{
		750:{
			slidesPerView: 2,
			spaceBetween: 16,
		},
		480:{
			slidesPerView: 2,
			spaceBetween: 8,
		}
	}
});
/*-------- /スライド --------*/
