// Captura
function tomarImg(){
	// capture callback
	var captureSuccess = function(mediaFiles) {
		for (i = 0; i < mediaFiles.length; i++) {
			//path = mediaFiles[i].fullPath;
			 uploadFile(mediaFiles[i]);
			// do something interesting with the file
		}
		$('#logFoto').css('background-color','#0F6');
		$('#logEnv').prepend('<img src="'+path+'" style="width:100%;" />');
		//pgAlert(path, "oK");
	};
	
	// capture error callback
	var captureError = function(error) {
		pgAlert(error.code,"Cancelar");
	};
	
	// start image capture
	navigator.device.capture.captureImage(captureSuccess, captureError, {limit:1});
	
}

