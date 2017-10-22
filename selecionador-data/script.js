$(function(){
	
	var escolhaCampoHora;
	
	$('input').bind('focus', function(){
		
		var pos = $(this).offset();
		var largCampo = $(this).width();
		
		$('.hora-escolha').css('left', pos.left + largCampo + 15);
		$('.hora-escolha').css('top', pos.top);
		$('.hora-escolha').show();
	
		escolhaCampoHora = $(this);
		
	});
	
	$('input').bind('blur', function(){
		setTimeout(function(){
		$('.hora-escolha').hide();
		}, 200);
	});
	
	$('.hora-escolha button').bind('click', function(){
		
		var hora = $(this).html();
		escolhaCampoHora.val(hora);
	});
});