//pcとspで画像切り替え
$(function () {
    $('img.rp').hide();
});

var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

$(window).on('load resize', function () {
	var $body = $('body');
	var $rp = $('img.rp');
	if (windowWidth <= 767) {
		$body.removeClass('w-sp w-pc');
		$body.addClass('w-sp');
		$rp.each(function () {
			if ($(this).attr("src").indexOf('--sp') == -1) {
				$(this).attr("src", $(this).attr("src").replace(/(\.)(png|jpg|gif)/, "--sp$1$2"));
			}
			$(this).show();
		});
	} else {
		$body.removeClass('w-sp w-pc');
		$body.addClass('w-pc');
		$rp.each(function () {
			$(this).attr("src", $(this).attr("src").replace("--sp", ""));
			$(this).show();
		});
	}
	
	//フッターを下に付ける為にbodyにpaddingを取る
	var footerH = $(".l-footer").height();
	$("body").css("padding-bottom", footerH);
});

$(window).on('load', function () {
    // TOPへ戻る
	var pagetop = $('.toTop');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			pagetop.fadeIn();
				} else {
			pagetop.fadeOut();
		}

        // TOPへ戻る フッター手前で止まる
        var scrollH = $(document).height();
        var scrollPos = $(window).height() + $(window).scrollTop();
        if (windowWidth <= 750) { // SP
          if ( (scrollH - scrollPos) / scrollH <= 0.06) {
              $('.toTop').css({"position":"absolute","bottom": 312});
          } else {
              $('.toTop').css({"position":"fixed","bottom": 70});
          }
        } else { // PC
          if ( (scrollH - scrollPos) / scrollH <= 0.04) {
              $('.toTop').css({"position":"absolute","bottom": 280});
          } else {
              $('.toTop').css({"position":"fixed","bottom": 70});
          }
        }
	});
	pagetop.click(function () {
		$('body, html').animate({ scrollTop: 0 }, 500);
		return false;
	});
});
//humberger menu
$(function(){
    $('.l-header__menu,.l-side-menu__close,.l-side_cover,.l-side-menu__close-top').on('click',function(){
        $('.l-side-menu').toggleClass('action');
        $('.l-side_cover').toggleClass('cover');
        $('.l-side-menu__close-top').toggleClass('on');
        $('body').toggleClass('fixed');
    });

//	alert("v9");
//	$(".l-side-menu__inner").on('touchmove', function(e) {
//		e.stopPropagation();
//		console.log("sss");
//	});

    $('.l-side-menu__close,.l-side_cover,.l-side-menu__close-top').on('click',function(){
        $('.l-side-menu__inner').delay(500).animate({scrollTop:0},100);
    });

		//spでcover部分に触れるとメニューをclose
		$('.l-side_cover').bind("touchstart", function(e){
			e.preventDefault();
			$('.l-side-menu').toggleClass('action');
			$('.l-side_cover').toggleClass('cover');
			$('.l-side-menu__close-top').toggleClass('on');
			$('body').toggleClass('fixed');
			$('.l-side-menu__inner').delay(500).animate({scrollTop:0},100);
		});
});

//header menu
$(function() {
/*
//PC underline
    $('.l-header__menu-select span').css({
    width: $('.l-header__menuList-link').width(),
    left: $('.l-header__menuList-link').position().left
    });
    $('.l-header__menuList-link').click(function(){
        $('.l-header__menu-select span').animate({
            'left': $(this).position().left
        },300);
    });

//SP under line
    $('.l-header__menuList-link').click(function(){
        $('.l-header__menuList-link').removeClass('active');
        $(this).addClass('active');
    })
*/
});



$(document).ready(function() {
	// スクロール時 アニメーション表示
	$(window).scroll(function(){
		var windowH = $(window).height();
		var windowT = $(window).scrollTop();
		$('.animV').each(function(){
			var targetPos = $(this).offset().top;
			if( windowT > targetPos - windowH + 100){
				$(this).addClass('vertical');
			}
		});
		$('.animH').each(function(){
			var targetPos = $(this).offset().top;
			if( windowT > targetPos - windowH + 60){
				$(this).addClass('horizontal');
			}
		});
	});

	// ヘッダー固定によるリンク位置の調整
	var windowWidth = $(window).width();
	var headerHight;
	if (windowWidth <= 750) {
		headerHight = 65;
	} else {
		headerHight = 90;
	}
	$('a[href^=#]').click(function(){
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top-headerHight;
		$("html, body").animate({scrollTop:position}, 550, "swing");
		return false;
	});
	
	
});

var windowWidth = $(window).width();
var headerHight;
if (windowWidth <= 750) {
	headerHight = 65;
} else {
	headerHight = 90;
}


/*----- 長いテキストを制御 -----*/
//swiper等の処理が終わってから起動させる
$(document).ready(function(){
//注)cssにて元の要素にline-heightを考慮したheightを指定しておく
$(".clamp").each(function(){
	//要素を取得
	var thisElm = $(this);
	//文章の取得
	var thisTxt = thisElm.html();
	//要素を複製
	var clone = thisElm.clone();

	//複製を高さauto、非表示にする
	clone.css({
		display:"none",
		position:"absolute",
		overflow:"visible",
		width:thisElm.width(),
		height:"auto"
	});
	//複製を要素の後に追加
	thisElm.after(clone);

	//文章が1文字以上で複製が元の要素の高さ以上の場合
	while((thisTxt.length > 0) && (clone.height() > thisElm.height())){
		//指定した高さになるまで、1文字ずつ消去していく
		thisTxt = thisTxt.substr(0, thisTxt.length - 1);
		//1文字消去したものに「…」を足して複製に上書き
		clone.html(thisTxt + "…");
		//「…」を足した高さが元の高さと同じになるまでループ
	}

	//文章を入れ替える
	thisElm.html(clone.html());
	//複製した要素を削除
	clone.remove();
});//.clampEachFncEnd

});//docRdyFncEnd
/*----- /長いテキストを制御 -----*/




