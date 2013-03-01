// Ajax
function registrar(nom, lug, ema, tel){
	$.ajax({
			type: "POST",
			url: "htt://igitsoft.com/pgtest.php",
			data: "nom="+nom+"&lug="+lug+"&ema="+ema+"&tel="+tel
	}).done(function(msg) {
		if(msg==1)
			pgAlert(msg,'Aceptar');
		else
			pgAlert(msg, 'Cancelar');
	});
}

