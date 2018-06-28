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
	function clkScrl(btn, pos){
		$(btn).click(function(){
			var href= $(this).attr("href");
			var target = $(href == "#" || href == "" ? 'html' : href);
			var position = target.offset().top-headerHight;
			$("html, body").animate({scrollTop:position-pos}, 550, "swing");
			return false;
		});
	}
	clkScrl('a[href^=#]', 0);
	clkScrl('.clkScrl', 0);

});

var windowWidth = $(window).width();
var headerHight;
if (windowWidth <= 750) {
	headerHight = 65;
} else {
	headerHight = 90;
}
//pcとspで画像切り替え
$(function () {
    $('img.rp').hide();
});

var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

$(window).on('load resize', function () {
	var $body = $('body');
	var $rp = $('img.rp');
	if (windowWidth <= 750) {
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
              $('.toTop').css({"position":"absolute","bottom": 385});
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


/*----- アコーディオン -----*/
$(function(){
	//btnとboxの位置を問わないアコーディオン(data属性にてbtnとboxを繋ぐ)
	$(".btnAcrd1").click(function(){
		$(this).toggleClass("show");
		var thisAcrd = $(this).attr("data-acrdNo");
		$("[data-acrdBoxNo=" + thisAcrd + "]").slideToggle();
		return false;
	});

	//アコーディオンのリスト(btnとboxは隣り合わせ)
	$(".u-acrdList1 .partAcrdBtn").click(function(){
		$(this).parent().toggleClass("show");
		$(this).next().slideToggle();
		return false;
	});

	//ラジオのアコーディオン＆スクロール
	$(".btnRdoAcrd").change(function(){
		//このラベル
		var thisRdo = $(this);
		//btnとboxを繋ぐ為の属性を取得
		var thisRdoAcrd = $(this).attr("data-rdoAcrdNo");
		//radioグループが同一ページに2つ以上ある場合の為にグループを取得
		var rdoGrp = $(this).attr("name");
//		var thisChk = $(this).prop("checked");

		//acrdBoxにグループ名をつけておく
		$(".rdoAcrdBoxGrp-" + rdoGrp).slideUp(function(){
			//全てが閉じたタイミングでスクロール
			var position = thisRdo.parent().offset().top-headerHight;
			$("html, body").animate({scrollTop:position}, 400, "swing");
		});
		$("[data-rdoAcrdBoxNo=" + thisRdoAcrd + "]").slideDown(400);
		return false;
	});
});
/*----- /アコーディオン -----*/


/*----- 長いテキストを制御 -----*/
//swiper等の処理が終わってから起動させる
$(window).load(function(){
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

$(window).on('load', function () {
		//PC
    // 選手名を選ぶ
    $('.l-header__selectBtn').on('click',function(){
        $('.l-header__playerBox').toggleClass('open');
        return false;
    });
    $('.l-header__playerBox').on('click',function(){
        return false;
    });
    $(document).on('click',function(){
        $('.l-header__playerBox').removeClass('open');
    });
    $(".l-header__playerBox .btnCls").on('click',function(){
        $('.l-header__playerBox').removeClass('open');
    });
    // 選手名 選択したらフォームに記述
    $('.l-header__playerNameLink').find('a').on('click',function(){
        var player = $(this).text();
        $('#inputHeader').val(player);
        $('.l-header__playerBox').removeClass('open');
        return false;
    });

		//SP
    // 選手名を選ぶ
    $('.l-header__selectBtn_sp').on('click',function(){
        $(this).toggleClass("open");
        $('.l-header__playerBoxSp').toggleClass('open');
			
        return false;
    });
    $('.l-header__playerBoxSp').on('click',function(){
        return false;
    });
    $(document).on('click',function(){
        $('.l-header__playerBoxSp,.l-header__selectBtn_sp').removeClass('open');
    });
    $(".l-header__playerBoxSp .btnCls").on('click',function(){
        $('.l-header__playerBoxSp').removeClass('open');
    });
    // 選手名 選択したらフォームに記述
    $('.l-header__playerBoxSp .l-header__playerNameLink').find('a').on('click',function(){
        var player = $(this).text();
        $('#inputHeader--sp').val(player);
        $('.l-header__playerBoxSp').removeClass('open');
        return false;
    });

    // 検索履歴の表示・非表示
    $('#inputHeader').focus(function(){
        $('.l-header__searchHistory').addClass('active');
        $(this).select();
    });
//    $(document).on('click',function(e){
//        if(!$(event.target).closest('#inputHeader').length) {
//            $('.l-header__searchHistory').removeClass('active');
//        }
//    });
    // 検索履歴を選択したらフォームに記述
    $('.l-header__searchHistoryRow').find('a').on('click',function(){
        var history = $(this).text();
        $('#inputHeader').val(history);
        $('.l-header__searchHistory').removeClass('active');
        return false;
    });

    // もっと見る
    $('.readmore').find('a').on('click',function(){
        $('.hidden').slideToggle();
        $(this).toggleClass('open');
        if($(this).hasClass('open')) {
            $(this).text('閉じる');
        } else {
            $(this).text('もっと見る');
        }
        return false;
    });

    // ヘッダー メニュー
    $('.nav').on('mouseover',function() {
        $(this).find('.l-sidebar__block').addClass('open');
        return false;
    });
    $('.nav').on('mouseout',function() {
        $(this).find('.l-sidebar__block').removeClass('open');
        return false;
    });

    // 注目ワード moreクリック時
    $('.more').find('a').on('click',function(){
        $(this).toggleClass('open');
        $('.plus').slideToggle();
        return false;
    });
  
    //inputにフォーカス時に下部固定メニューを非表示
    var ua = navigator.userAgent;
    if (ua.indexOf('Android') > 0) {
      $("input,textarea").focus(function(){
        $(".l-footer__navArea").css({bottom:"-100px"});
      }).blur(function(){
        $(".l-footer__navArea").css({bottom:0,transition:"0.5s"});
      });
    }
  
  
    //メニューの表示
  $("#showMenu").click(function(){
    $(".l-footer__modalWrap,.l-footer__modalBg").toggleClass("show");
    $("body").toggleClass("modal_on");
    $(this).hide();
    $("#closeMenu").show();
    return false;
  });
  $(".l-footer__modalBg,#closeMenu").click(function(){
    $(".l-footer__modalWrap,.l-footer__modalBg").removeClass("show");
    $("body").removeClass("modal_on");
    $("#closeMenu").hide();
    $("#showMenu").show();
    return false;
  });
});

$(function(){
	$(".l-sidebar__linkList2 > li > a").click(function(){
		$(this).parent().toggleClass("opn");
		$(this).next().slideToggle();
		return false;
	});
});
