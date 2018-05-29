$(window).on('load', function () {
/*----- アコーディオン -----*/
$(function(){
	$(".faqBox dt").click(function(){
		$(this).toggleClass("show");
		$(this).next().slideToggle();
		return false;
	});
});
/*----- /アコーディオン -----*/


});