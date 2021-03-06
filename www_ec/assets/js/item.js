/*-------- スライド --------*/
$(function() {
	$('.slick-box').slick({
		infinite: true,
    dots: true,
		speed:100
	}); 
});

var mySwiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	spaceBetween: 0,
	loop: true,
	pagination: ".swiper-pagination",
	paginationClickable: true
});
/*-------- /スライド --------*/


$(document).ready(function() {
  //サムネイル差し替え
  $(".item-thumbs li").click(function(){
    $(".item-thumbs li").removeClass();
    $(this).addClass("selected");
    var imgSrc = $("img",this).attr("src");
    $(".item-photo .pc-photo img").attr("src",imgSrc);
  });
  
  //SP商品詳細
  $(".item-detail h2").click(function(){
    $(this).toggleClass("open");
    $(this).next().toggleClass("sp-show");
  });
  
  //サイズのradio切り替え
  $(".size-select input").change(function(){
    $(".size-select .checkBox").removeClass("checked");
    $(".size-select input:checked").parent().addClass("checked");
  });
  
  //カート確認のモーダル
  $(".modal-close").click(function(){
    $(".confirm-modal").fadeOut("fast");
  });
  
});

//商品詳細のお気に入りbtn
$(function(){
	$(".fav-btn").click(function(){
		$(this).toggleClass("on");
		return false;
	});
});

