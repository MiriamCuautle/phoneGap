// Notificaciones
function pgAlert(msj, btn){
	navigator.notification.alert(msj, null, "Reservaciones", btn);
	
}


//Beep
function sonar(num){
	navigator.notification.beep(5);
}
//Vibrate
function vibrar(num){
	navigator.notification.vibrate(500);//milisegundos 1000 un segundo
}
//Confirm
function pgConfirma(msj, btns, fn){
	navigator.notification.confirm(msj, fn, 'Reservaciones', btns);
}



