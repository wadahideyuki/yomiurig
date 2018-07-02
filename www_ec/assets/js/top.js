$(window).on('load', function () {
    // NEWS 新着・その他 切り替え
    var tab = $('.p-top__newsTab').find('a');
    var tabA = $('.p-top__newsTab--A').find('a');
    var tabB = $('.p-top__newsTab--B').find('a');
    var wrap = $('.p-top__newsWrap');
    tab.on('click',function() {
        if(!$(this).hasClass('is-active')) {
            tab.removeClass('is-active');
            $(this).addClass('is-active');
        }
        return false;
    });
    tabA.on('click',function(){
        wrap.removeClass('is-slide');
    });
    tabB.on('click',function(){
        wrap.addClass('is-slide');
    });

    var W = $(window).width();
    var Sm = 750;
//    var newsList = $('.swiperName-new .p-top__itemList');
//    var rankingList = $('.swiperName-ranking .p-top__itemList');
//    var recommendList = $('.swiperName-recommend .p-top__itemList');
//    if (W < Sm) {
//        //newsList.addClass('item-slider');
//        recommendList.addClass('item-slider');
//        rankingList.addClass('ranking-slider');
//    } else {
//        //newsList.removeClass('item-slider');
//        recommendList.removeClass('item-slider');
//        rankingList.removeClass('ranking-slider');
//    }


    // KV スライダー
    $('.main-slider').slick({
			dots: false,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
			speed: 400,
			slidesToShow: 1,
			adaptiveHeight: true,
			asNavFor: '.sub-slider',
			responsive:[
				{
					breakpoint:751,
					settings:{
						dots:true
					}
				}
			]
    });
    $('.sub-slider').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			focusOnSelect: true,
			arrows: true,
			autoplay: true,
			autoplaySpeed: 5000,
			speed: 400,
			asNavFor: '.main-slider'
    });

	/*$(".l-header__loginAfter").click(function(){
		$(".logMenu").toggle();
		return false;
	});*/
});


//swiper
//新着商品
var swiperNew = new Swiper('.swiperName-new .swiper-container', {
	slidesPerView: 3,
	spaceBetween: 10,
	loop: true,
	autoHeight: true,
	navigation: {
		nextEl: '.swiperName-new .swiper-button-next',
		prevEl: '.swiperName-new .swiper-button-prev',
	},
	breakpoints:{
		750:{
			slidesPerView: 3,
			spaceBetween: 1,
			pagination: {
				el: ".swiperName-new .swiper-pagination",
				clickable: true
			}
		}
	}
});
//ランキング
var swiperRanking = new Swiper('.swiperName-ranking .swiper-container', {
	slidesPerView: 3,
	spaceBetween: 10,
	loop: true,
	autoHeight: true,
	navigation: {
		nextEl: '.swiperName-ranking .swiper-button-next',
		prevEl: '.swiperName-ranking .swiper-button-prev',
	},
	breakpoints:{
		750:{
			slidesPerView: 3,
			spaceBetween: 1,
			pagination: {
				el: ".swiperName-ranking .swiper-pagination",
				clickable: true
			}
		}
	}
});
//あなたにオススメの商品
var swiperRecommend = new Swiper('.swiperName-recommend .swiper-container', {
	slidesPerView: 3,
	spaceBetween: 10,
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
//最近チェックした商品
var swiperChecked = new Swiper('.swiperName-checked .swiper-container', {
	slidesPerView: 3,
	spaceBetween: 10,
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


var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
if(windowWidth > 750) {//PC時のみの
} else {//SP時のみの
}
