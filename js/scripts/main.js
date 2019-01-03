$(function(){
	$('#photoshoot').on('vclick',function(evt){
		evt.preventDefault();
		navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
		    destinationType: Camera.DestinationType.DATA_URL
		});
	});
});





function onSuccess(imageData) {
    $('#gallery').append('<img src="data:image/jpeg;base64,'+ imageData+'" style="width:90%" /> <br>');    
}

function onFail(message) {
    alert('Failed because: ' + message);
}

