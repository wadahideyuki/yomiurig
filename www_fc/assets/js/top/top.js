$(window).on('load', function () {
// KV slider
    $('.main-slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 400,
        slidesToShow: 1,
    });
// NEWS tab
    var tabNews = $('.p-top__newsTab').find('a');
    var tabA = $('.p-top__newsTab--A').find('a');
    var tabB = $('.p-top__newsTab--B').find('a');
    var newsWrap = $('.p-top__newsWrap');

    tabNews.on('click',function() {
        if(!$(this).hasClass('is-active')) {
            tabNews.removeClass('is-active');
            $(this).addClass('is-active');
        }
        return false;
    });
    tabA.on('click',function(){
        newsWrap.removeClass('is-slide');
    });
    tabB.on('click',function(){
        newsWrap.addClass('is-slide');
    });
    
// event/gift tab
    var tabInfo = $('.p-top__infoTab').find('a');
    var tabC = $('.p-top__infoTab--A').find('a');
    var tabD = $('.p-top__infoTab--B').find('a');
    var infoWrap = $('.p-top__infoWrap');

    tabInfo.on('click',function() {
        if(!$(this).hasClass('is-active')) {
            tabInfo.removeClass('is-active');
            $(this).addClass('is-active');
        }
        return false;
    });
    tabC.on('click',function(){
        infoWrap.removeClass('is-slide');
    });
    tabD.on('click',function(){
        infoWrap.addClass('is-slide');
    });

    
// recommend more read
	$('.readmore').find('a').on('click',function(){
			$('.hidden').slideToggle();
			$(this).toggleClass('open');
			if($(this).hasClass('open')){
					$(this).text('閉じる')
			}else{
					$(this).text('もっと見る')
			}
			return false;
	});


	//オススメの商品のSP時スライド
	var mySwiper = undefined;
	var swiperWrap = $(".swiper-wrapper");
	var swiperSlide = $(".p-top__itemFrame");

	var initSwiper = function(){
		if($(window).width() <= 750){
			mySwiper = new Swiper('.swiper-container', {
				slidesPerView: 3,
				spaceBetween: 0,
				loop: true,
				pagination: ".swiper-pagination",
				paginationClickable: true
			});
		}else{
			mySwiper.destroy();
			mySwiper = undefined;
			for(var i = 0; i < swiperWrap.length; i++){
				swiperWrap[i].removeAttribute("style");
			}
			for(var i = 0; i < swiperSlide.length; i++){
				swiperSlide[i].removeAttribute("style");
			}
		}

	}
	initSwiper();

	$(window).on('resize', function () {
		initSwiper();
	});

});




