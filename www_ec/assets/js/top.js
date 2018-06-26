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
    var newsList = $('.p-top__section--new .p-top__itemList');
    var rankingList = $('.p-top__section--ranking .p-top__itemList');
    var recommendList = $('.p-top__section--recommend .p-top__itemList');
    if (W < Sm) {
        //newsList.addClass('item-slider');
        recommendList.addClass('item-slider');
        rankingList.addClass('ranking-slider');
    } else {
        //newsList.removeClass('item-slider');
        recommendList.removeClass('item-slider');
        rankingList.removeClass('ranking-slider');
    }


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

	$(".l-header__loginAfter").click(function(){
		$(".logMenu").toggle();
		return false;
	});
});


//swiper
var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
if(windowWidth > 750) {//PC時のみの
    //新着商品
    var swiperNew = new Swiper('.p-top__section--new .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        autoHeight: true,
        navigation: {
            nextEl: '.p-top__section--new .p-top-swiper-control__next',
            prevEl: '.p-top__section--new .p-top-swiper-control__prev',
        }
    });
    //ランキング
    var swiperRanking = new Swiper('.p-top__section--ranking .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        autoHeight: true,
        navigation: {
            nextEl: '.p-top__section--ranking .p-top-swiper-control__next',
            prevEl: '.p-top__section--ranking .p-top-swiper-control__prev',
        }
    });
    //あなたにオススメの商品
    var swiperRecommend = new Swiper('.p-top__section--recommend .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        autoHeight: true,
        navigation: {
            nextEl: '.p-top__section--recommend .p-top-swiper-control__next',
            prevEl: '.p-top__section--recommend .p-top-swiper-control__prev',
        }
    });
    //最近チェックした商品
    var swiperChecked = new Swiper('.p-top__section--checked .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        autoHeight: true,
        navigation: {
            nextEl: '.p-top__section--checked .p-top-swiper-control__next',
            prevEl: '.p-top__section--checked .p-top-swiper-control__prev',
        }
    });
} else {//SP時のみの
    //SPのswiper共通
    var allSwiper = new Swiper('.swiperContainer', {
        slidesPerView: 3,
        spaceBetween: 5,
        loop: true,
        navigation: {
            nextEl: '.p-top-swiper-control__next',
            prevEl: '.p-top-swiper-control__prev',
        }
    });
    //新着商品
    var swiperNew = new Swiper('.p-top__section--new .swiper-container', {
			slidesPerView: 3,
			spaceBetween: 1,
			loop: true,
			pagination: {
					el: '.p-top__section--new .m-swiper-pagination',
					type: 'bullets',
					clickable: true,
			}
    });
    //ランキング
    var swiperRanking = new Swiper('.p-top__section--ranking .swiper-container', {
			slidesPerView: 3,
			spaceBetween: 1,
			loop: true,
			pagination: {
					el: '.p-top__section--ranking .m-swiper-pagination',
					type: 'bullets',
					clickable: true,
			}
    });
    //あなたにオススメの商品
    var swiperRecommend = new Swiper('.p-top__section--recommend .swiper-container', {
			slidesPerView: 3,
			spaceBetween: 1,
			loop: true,
			pagination: {
					el: '.p-top__section--recommend .m-swiper-pagination',
					type: 'bullets',
					clickable: true,
			}
    });
    //最近チェックした商品
    var swiperChecked = new Swiper('.p-top__section--checked .swiper-container', {
			slidesPerView: 3,
			spaceBetween: 1,
			loop: true,
			pagination: {
					el: '.p-top__section--checked .m-swiper-pagination',
					type: 'bullets',
					clickable: true,
			}
    });
}
