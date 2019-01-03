$('#logout').click(function(){
	myApp.closePanel();
	window.history.back();
});

$('#Menu').on('click', function() {
    myApp.openPanel('left');
});

$('#Search').on('click', function() {
	myApp.popup('.popup-search');
});

$(document).on("swipeleft", function() {
    myApp.closePanel();
});

$(document).on("swiperight", function() {
    myApp.openPanel('left');
});

$(document).on('swipeup', function(){
	if($('.page.page-on-left.cached').length === 0){
		if($('.picker-sesion').position().top === 0){
			myApp.popup('.popup-search');
		}
	}
});

$(document).on('swipedown', function(){
	if ($('.picker-sesion').position().top !== 0) {
		myApp.closeModal('.picker-sesion');
		$('#map-overlay').hide();
	}
	if ($('.modal-overlay-visible').length !== 0) {
		myApp.closeModal('.popup-search');
	}
});

$('#searchUF').on('click', function() {
	$('#list-login li').remove();
	cargarBusqueda(0);
});

function mostrarMas(){
	$(".label-checkbox.item-content").bind("taphold", function(){
		if($('.smart-select-page .item-content').css('left') === "-50px"){
			$('.smart-select-page .item-content').css({
			    'left': '0px',
			    'width': '100%'
			});
			$('.smart-select-page .navbar .navbar-inner .right').remove();
			$('.smart-select-page .navbar .navbar-inner').append(
				'<div class="right">'+
					'<a href="#" onclick="mostrarMenos()" class="link icon-only">'+
						'<i class="icon icon-close"></i>'+
					'</a>'+
				'</div>'
			);
			$('.smart-select-page').append(
				'<a href="#" onclick="recorrerCheck()" class="floating-button color-amovil">'+
                    '<i class="icon f7-icons">check</i>'+
                '</a>'
            );
		}
	});

	$(".label-checkbox.item-content").bind("tap", function(){
		if($('.smart-select-page .item-content').css('left') === "-50px"){
			var fecha = $(this).text();
			var	device = $($(this).children()[1]).val();
			var user = $('.smart-select-page .navbar .navbar-inner .center').text();
			var grupo = $($(this)[0].parentElement)[0].parentElement;
			var sitio;
			$.each($(grupo).find('li.item-divider'), function(){
				if ($('#'+user+' select optgroup[label="'+$(this).text()+'"] option[value="'+device+'"]').attr('latdm') !== undefined) {
					sitio = $(this).text();
				}
			});
			var latitude = $('#'+user+' select optgroup[label="'+sitio+'"] option[value="'+device+'"]').attr('latdm');
			var longitude = $('#'+user+' select optgroup[label="'+sitio+'"] option[value="'+device+'"]').attr('longdm');
			mainView.router.load({pageName: 'map'});
			getPlaces(user, latitude, longitude, device, sitio);
		}
	});

	$('.smart-select-page .back').on('click', function(){
		$('.smart-select .item-after').remove();
	});
}

function mostrarMenos(){
	$('.smart-select-page .item-content').css({
	    'left': '-50px',
	    'width': '115%'
	});
	$('.smart-select-page .navbar .navbar-inner .right').remove();
	$('.smart-select-page .floating-button').remove();
	$('.smart-select-page .navbar .navbar-inner').append(
		'<div class="right">'+
			'<a href="list.html" class="link icon-only">'+
				'<i class="icon f7-icons">graph_round</i>'+
			'</a>'+
		'</div>'
	);
}

function recorrerCheck(){
	var points = $('.smart-select-page .page-content ul li .label-checkbox.item-content');
	var user = $('.smart-select-page .navbar .navbar-inner .center').text();
	mainView.router.load({pageName: 'map'});
	$('#nameUser').text(user);

	var latLongCenter = new google.maps.LatLng('5.1172679', '-74.3147319');
	var mapOptions = {
        center: latLongCenter,
        zoom: 5
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

	$.each(points, function () {
		if($($(this).children()[0]).prop('checked')){
			var datos = obtenerDatos(this, user);

			var latLong = new google.maps.LatLng(datos.latitude, datos.longitude);
			var marker = new google.maps.Marker({
			    position: latLong,
		        animation: google.maps.Animation.BOUNCE
			});
			var contentString = '<div>'+datos.sitio+'</div>'+
								'<div><b>'+datos.device+'</b></div>';
			marker.setMap(map);
			google.maps.event.addListener(marker,'click',function() {
			    map.setZoom(15);
			    map.setCenter(marker.getPosition());
			    var infowindow = new google.maps.InfoWindow({
			      	content: contentString
			    });
			  	infowindow.open(map, marker);
			});
		}
	});
}

function obtenerDatos(thiss, user){
	var fecha = $(thiss).text();
	var	device = $($(thiss).children()[0]).val();
	var grupo = $($(thiss)[0].parentElement)[0].parentElement;
	var sitio;
	$.each($(grupo).find('li.item-divider'), function(){
		if ($('#'+user+' select optgroup[label="'+$(this).text()+'"] option[value="'+device+'"]').attr('latdm') !== undefined) {
			sitio = $(this).text();
		}
	});
	var latitude = $('#'+user+' select optgroup[label="'+sitio+'"] option[value="'+device+'"]').attr('latdm');
	var longitude = $('#'+user+' select optgroup[label="'+sitio+'"] option[value="'+device+'"]').attr('longdm');
	
	var info = {
		'fecha': fecha,
		'device': device,
		'grupo': grupo,
		'sitio': sitio,
		'latitude': latitude,
		'longitude': longitude
	};
	return info;
}


function getPlaces(user, latitude, longitude, device, location) {
	app.showProgress();
	if ($('.picker-sesion').position().top !== 0) {
		myApp.closeModal('.picker-sesion');
		$('#map-overlay').hide();
	}
	setTimeout(function(){
		$('#nameUser').text(user);

	    var latLong = new google.maps.LatLng(latitude, longitude);
	    var mapOptions = {
	        center: latLong,
	        zoom: 5
	    };
	    
	    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
		var marker = new google.maps.Marker({
		    position: latLong,
	        animation: google.maps.Animation.BOUNCE
		});
		var contentString = '<div>'+location+'</div>'+
							'<div><b>'+device+'</b></div>';
		marker.setMap(map);
		google.maps.event.addListener(marker,'click',function() {
		    map.setZoom(15);
		    map.setCenter(marker.getPosition());
		    var infowindow = new google.maps.InfoWindow({
		      	content: contentString
		    });
		  	infowindow.open(map, marker);
		});

		app.hideProgress();
	}, 100);
}