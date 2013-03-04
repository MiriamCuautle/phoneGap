// Eventos
$(document).ready(function(){
	document.addEventListener("deviceready",function(){
	if(!isLogin()){
		window.location.href="#login";
	
	
		$('#logEnv').tap(function(){
			var nom = $("#logNom").val();
			var lug = $("#logLug").val();
			var ema = $("#logEma").val();
			var tel = $("#logTel").val();
			
			if(nom != '' && lug != 'Lugar de Origen' && ema != '' & tel !=''){
				registrar(nom, lug, ema, tel);	
			}else{
				pgAlert("Todos los campos son requerido, 'Reintentar'");
			}
				
		});
		$('#logFoto').tap(function(){
			tomarImg();
		});
		
		$('#logEnv').tap(function(){
			uploadFile(ruta);
		});
	}//Cierra el if de loggin
}, false);
	
});


function isLogin()
{
	return false;
}

//resume- regresar a la aplicacion. online- detecta la conexion a internet. offline- desconecta. pause-pausa
<!--document.addEventListener("pause", function(){}, false);-->


