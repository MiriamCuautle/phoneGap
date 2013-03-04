// Archivos
 // Upload files to server
    function uploadFile(ruta) {
        var ft = new FileTransfer();

        ft.upload(ruta.fullPath,
            "http://igitsoft.com/pgtest.php",
            function(result) {
                console.log('Upload success: ' + result.responseCode);
                console.log(result.bytesSent + ' bytes sent');
            },
            function(error) {
                console.log('Error uploading file ' + path + ': ' + error.code);
            },
            { fileKey: "archivo", fileName: name });   
    }


//