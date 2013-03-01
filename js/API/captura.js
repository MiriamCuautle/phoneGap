// Captura
function tomarImg(){
	// capture callback
	var captureSuccess = function(mediaFiles) {
		for (i = 0; i < mediaFiles.length; i++) {
			path = mediaFiles[i].fullPath;
			// do something interesting with the file
		}
		pgAlert(path, "oK");
	};
	
	// capture error callback
	var captureError = function(error) {
		pgAlert(error.code,"Cancelar");
	};
	
	// start image capture
	navigator.device.capture.captureImage(captureSuccess, captureError, {limit:1});
	
}