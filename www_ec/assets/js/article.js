/*-------- スライド --------*/
var swiperArticleList = new Swiper('.swiperName-articleList .swiper-container', {
		slidesPerView: 3,
		spaceBetween: 16,
		loop: true,
		autoHeight: true,
		navigation: {
				nextEl: '.swiperName-articleList .swiper-button-next',
				prevEl: '.swiperName-articleList .swiper-button-prev',
		},
		breakpoints:{
			750:{
				slidesPerView: 2,
				spaceBetween: 16,
				pagination: {
					el: ".swiperName-articleList .swiper-pagination",
					clickable: true
				}
			},
			480:{
				slidesPerView: 2,
				spaceBetween: 8,
				pagination: {
					el: ".swiperName-articleList .swiper-pagination",
					clickable: true
				}
			}
		}
});

/*-------- /スライド --------*/
