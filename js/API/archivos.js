// Archivos
 // Upload files to server
    function uploadFile(ruta) {
        var ft = new FileTransfer();

        ft.upload(ruta,
            "http://igitsoft.com/pgtest.php",
            function(result) {
                console.log('Upload success: ' + result.responseCode);
                console.log(result.bytesSent + ' bytes sent');
				//pgAlert('Imagen subido',result.responseCode+result.bytestSent);
				setData('usuario',$('#logNom').val());
				setData('dispId',dispositivo()['uuid']);
				//Crear tabla de reservacion
				transacciones(accesoBD(Hotel, 100000), function(tx){
					crearTabla(tx,'reserva','rId,fecha,habitaciones, personas, estancia');
				}, error, ok)
            },
            function(error) {
                console.log('Error uploading file ' + ruta + ': ' + error.code);
            },
            { fileKey: "archivo", fileName: name });   
    }
	


//