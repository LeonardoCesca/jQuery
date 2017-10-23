$(function(){
	$('#senha').bind('keyup', function(){
		
		var txt = $(this).val();
		
		var forca = 0;

		if(txt.length > 6){
			forca += 25;
		}
		
		var reg = new RegExp(/[a-z]/i); //expressão regular que procura de a até z. O i significa tanto maiuscula como minuscula.
		if(reg.test(txt)){ //verifica se tem letras de a-z 
			forca += 25;
		}
		var reg = new RegExp(/[0-9]/i); //expressão regular que procura de a até z. O i significa tanto maiuscula como minuscula.
		if(reg.test(txt)){ //verifica se tem letras de a-z 
			forca += 25;
		}
		
		var reg = new RegExp(/[^a-z0-9]/i);
		if(reg.test(txt)){
			forca += 25;
		}
		
		if(forca >= 75){
			var aceita = 'Senha aceita';
		}else{
			var aceita = 'Senha não aceita';
		}
		
		
		$('#forca').html('Forca: '+forca+ '( '+txt+') - '+aceita);
		
	});
});