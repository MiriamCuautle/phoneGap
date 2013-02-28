// Eventos
$(document).ready(function(){
	window.addEventListener("deviceready",function(){
	if(!isLogin()){
		window.location.href="#login";
	}
	
	$('#logEnv').click(function(){
		var nom = $("#logNom").val();
		var lug = $("#logLug").val();
		var ema = $("#logEma").val();
		var tel = $("#logTel").val();
		
		if(nom != '' && lug != 'Lugar de Origen' && ema != '' & tel !=''){
			pgAlert(
				nom+'\n'+
				lug+'\n'+			
				ema+'\n'+		
				tel,
				'Aceptar');			
		}else{
			pgAlert("Todos los campos son requerido, 'Reintentar'");
		}
			
	});
}, false);
	
});


function isLogin()
{
	return false;
}




