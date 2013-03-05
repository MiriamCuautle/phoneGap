// Ajax
function registrar(nom, lug, ema, tel){
	$.ajax({
			type: "POST",
			url: "http://igitsoft.com/pgtest.php",
			data: "nom="+nom+"&lug="+lug+"&mai="+ema+"&tel="+tel+"&did="+dispositivo['uuid']
	}).done(function(msg) {
		if(msg==1)
		{
			pgAlert(msg, 'ok');
				pgAlert($('#logFoto').attr('ruta'));
				//uploadFile($('#logFoto').attr('ruta'))
		}
		else
			pgAlert(msg, 'Cancelar');
	});
}

