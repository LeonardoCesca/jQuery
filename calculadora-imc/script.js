$(function(){
	$('button').bind('click', function(){
		
		var altura = $('#altura').val();
		var peso = $('#peso').val();
		
		altura = altura.replace(',','.'); //substituir , por .
		
		peso = peso.replace(',','.'); //substituir , por .

		//IMC = peso / altura²
		
		var imc = peso/ (altura*altura);
		
		if(imc < 16){
			var traducao = 'Baixo peso, muito grave';
		}else if(imc >= 16 && imc < 16.99){
			traducao = 'Baixo peso, grave..';
		}else if(imc >= 17 && imc < 18.49){
			traducao = 'Baixo peso';
		}else if(imc >= 18.50 && imc < 24.99){
			traducao = 'Peso normal';
		}else if(imc >= 25 && imc < 29.99){
			traducao = 'Sobrepeso';
		}else if(imc >= 30 && imc < 34.99){
			traducao = 'Obesidade nivel I';
		}else if(imc >= 35 && imc < 39.99){
			traducao = 'Obesidade nivel II';
		}else if(imc >= 40){
			traducao = 'Obesidade nivel III';
		}
		
		$('#resultado2').html("IMC: "+imc+ "kg");
		$('#resultado1').html("status: "+traducao);

		
	});
});