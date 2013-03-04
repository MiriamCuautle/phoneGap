// Ajax
function registrar(nom, lug, ema, tel){
	$.ajax({
			type: "POST",
			url: "http://igitsoft.com/pgtest.php",
			data: "nom="+nom+"&lug="+lug+"&mai="+ema+"&tel="+tel
	}).done(function(msg) {
		if(msg==1)
		{
				uploadFile(ruta);
		}
		else
			pgAlert(msg, 'Cancelar');
	});
}

