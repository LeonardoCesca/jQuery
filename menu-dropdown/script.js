$(function(){
	
	$('li').hover(function(){
		$(this).find('.menu2').slideDown();
	},function(){
		$(this).find('.menu2').slideUp();
	});
});