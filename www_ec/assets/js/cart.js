//swiper
var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
if(windowWidth > 750) {
    //PC時のみの　ほしいものリスト
    var swiperChecked = new Swiper('.swiper-container.swiper-favolite', {
        slidesPerView: 3,
        spaceBetween: 16,
        loop: true,
        autoHeight: true,
        navigation: {
            nextEl: '.favolite__next',
            prevEl: '.favolite__prev',
        }
    });
    var swiperChecked = new Swiper('.swiper-container.swiper-bundleitem', {
        slidesPerView: 3,
        spaceBetween: 16,
        loop: true,
        autoHeight: true,
        navigation: {
            nextEl: '.bundleitem__next',
            prevEl: '.bundleitem__prev',
        }
    });
    var swiperChecked = new Swiper('.swiper-container.swiper-checkeditem', {
        slidesPerView: 3,
        spaceBetween: 16,
        loop: true,
        autoHeight: true,
        navigation: {
            nextEl: '.checkeditem__next',
            prevEl: '.checkeditem__prev',
        }
    });
} else {
    //SPのswiper共通
    var allSwiper = new Swiper('.swiperContainer.swiper-favolite', {
        slidesPerView: 3,
        spaceBetween: 1,
        loop: true,
        pagination: {
            el: '.favolite-pagination',
            type: 'bullets',
            clickable: true,
        }
        /*navigation: {
            nextEl: '.swiper-favolite .m-swiper-control__next',
            prevEl: '.swiper-favolite .m-swiper-control__prev',
        }*/
    });
    var allSwiper = new Swiper('.swiperContainer.swiper-bundleitem', {
        slidesPerView: 3,
        spaceBetween: 1,
        loop: true,
        pagination: {
            el: '.bundleitem-pagination',
            type: 'bullets',
            clickable: true,
        }
        /*navigation: {
            nextEl: '.swiper-bundleitem .m-swiper-control__next',
            prevEl: '.swiper-bundleitem .m-swiper-control__prev',
        }*/
    });
    var allSwiper = new Swiper('.swiperContainer.swiper-checkeditem', {
        slidesPerView: 3,
        spaceBetween: 1,
        loop: true,
        pagination: {
            el: '.checkeditem-pagination',
            type: 'bullets',
            clickable: true,
        }
        /*navigation: {
            nextEl: '.swiper-checkeditem .m-swiper-control__next',
            prevEl: '.swiper-checkeditem .m-swiper-control__prev',
        }*/
    });
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

