//swiper
//ほしいものリスト
var swiperFavolite = new Swiper('.swiperName-favolite .swiper-container', {
	slidesPerView: 3,
	spaceBetween: 16,
	loop: true,
	autoHeight: true,
	navigation: {
			nextEl: '.swiperName-favolite .swiper-button-next',
			prevEl: '.swiperName-favolite .swiper-button-prev',
	},
	breakpoints:{
		750:{
			slidesPerView: 3,
			spaceBetween: 1,
			pagination: {
				el: ".swiperName-favolite .swiper-pagination",
				clickable: true
			}
		}
	}
});
//買い合わせおすすめ商品
var swiperBundleitem = new Swiper('.swiperName-bundleitem .swiper-container', {
	slidesPerView: 3,
	spaceBetween: 16,
	loop: true,
	autoHeight: true,
	navigation: {
			nextEl: '.swiperName-bundleitem .swiper-button-next',
			prevEl: '.swiperName-bundleitem .swiper-button-prev',
	},
	breakpoints:{
		750:{
			slidesPerView: 3,
			spaceBetween: 1,
			pagination: {
				el: ".swiperName-bundleitem .swiper-pagination",
				clickable: true
			}
		}
	}
});
//最近チェックした商品
var swiperChecked = new Swiper('.swiperName-checked .swiper-container', {
	slidesPerView: 3,
	spaceBetween: 16,
	loop: true,
	autoHeight: true,
	navigation: {
			nextEl: '.swiperName-checked .swiper-button-next',
			prevEl: '.swiperName-checked .swiper-button-prev',
	},
	breakpoints:{
		750:{
			slidesPerView: 3,
			spaceBetween: 1,
			pagination: {
				el: ".swiperName-checked .swiper-pagination",
				clickable: true
			}
		}
	}
});
//あなたにおすすめの商品
var swiperRecommend = new Swiper('.swiperName-recommend .swiper-container', {
	slidesPerView: 3,
	spaceBetween: 16,
	loop: true,
	autoHeight: true,
	navigation: {
			nextEl: '.swiperName-recommend .swiper-button-next',
			prevEl: '.swiperName-recommend .swiper-button-prev',
	},
	breakpoints:{
		750:{
			slidesPerView: 3,
			spaceBetween: 1,
			pagination: {
				el: ".swiperName-recommend .swiper-pagination",
				clickable: true
			}
		}
	}
});


var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
if(windowWidth > 750) {
} else {
}


//お気に入りbtn
$(function(){
	$(".fav-btn").click(function(){
		var itemNo = $(this).attr("data-itemNo");
		$(".fav-btn").each(function(){
			if($(this).attr("data-itemNo") == itemNo){
				$(this).toggleClass("on");
			}
		});
		return false;
	});
});

