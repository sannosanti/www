$.support.cors                 = true;
$.mobile.allowCrossDomainPages = true;
$.mobile.pushStateEnabled      = false;

$(document).on('pageinit','#menu', function(){
	if(app.getMobile()){
        document.addEventListener("deviceready", onDeviceReady, false);
        document.addEventListener("pause", onResume, false);
	} else {
		onDeviceReady();
	}

	$('body').on('blur', function(){
		onResume();
	});

	app.initialize();
	var hi = app.getSesion();
	/*if(hi.length === 0){
		$(location).attr('href', '../../index.html');
	}*/
	$('#user').text(hi.usuario);
	$('#company').text(hi.compania);
	
	if (app.getMobile()) {
		document.addEventListener('deviceready', cargarConectados, false);
	} else {
		cargarConectados();
	}
	
	$('#Sesions').on('click', function() {
		myApp.closePanel();
		$('#map-overlay').show();
		myApp.pickerModal('.picker-sesion');
	});

	$('#close-sesions').on('click', function() {
		$('#map-overlay').hide();
	});

	$('#map-overlay').on('click', function() {
		myApp.closeModal('.picker-sesion');
		$('#map-overlay').hide();
	});

	$('.refreshSesion').on('click', function() {
		cargarConectados();
	});
});

document.addEventListener("backbutton", function(e) {
	navigator.notification.confirm(
        'Esta a punto de salir de la aplicación desea, ¿desea continuar?',
        confirmCallback,
        'AMovil',
        ['Ok', 'Cancel']
    );
}, false);

function confirmCallback(buttonIndex){
	if(buttonIndex === 1){
		navigator.app.exitApp();
	}
}

function cargarConectados(){
	var ajax_data = {
		'compania': app.getSesion().compania
	};
	$('#bottom-refresh').slideUp();

    app.showProgress();
	app.MultiAjaxAsync('/login', 'GET', ajax_data, function(user){
		$('#bottom-refresh').slideDown();
		if (user.status) {
			$('#connects').text('0');
			$('#connects-list li').remove();
			if(user.data.length !== 0){
				$.each(user.data, function (key, item) {
					if(item.login !== app.getSesion().usuario){
						$('#connects-list').append(
							'<li>'+
							    '<a href="#map" onclick="getPlaces(\''+item.login+'\','+item.latDM+','+item.longDM+',\''+item.deviceDM+'\',\''+item.locationDM+'\')" class="item-link item-content">'+
							        '<div class="item-inner">'+
							            '<div class="item-title-row">'+
							                '<div class="item-title">' + item.login + '</div>'+
							            '</div>'+
							            '<div class="item-subtitle">' + item.FecDM + '</div>'+
							        '</div>'+
							    '</a>'+
							'</li>'
						);
						$('#connects').text(parseInt($('#connects').text()) + 1);
					}
				});
			}else{
				$('#connects').text(user.data.length);
			}
		}
		app.hideProgress();
	});
}

function cargarBusqueda(pag){
	var formData = myApp.formToData('#formSearch');
  	var ajax_data = {
  		'compania'	: parseInt(app.getSesion().compania),
  		'login'		: formData.login === '' ? 'null' : formData.login,
  		'dia'		: formData.dia === '' ? 'null' : formData.dia,
  		'hora'		: formData.hora === '' ? 'null' : formData.hora,
  		'lugar'		: formData.lugar === '' ? 'null' : formData.lugar,
  		'pag'		: pag
  	};
  	app.showProgress();
	app.MultiAjaxAsync('/Responsable', 'GET', ajax_data, function(users){
		if (users.status) {
			if(users.data.length !== 0){
				cargarResultadoList(users.data, pag + 1);
			}

			$('.smart-select').unbind('click');
			$('.smart-select').on('click', function() {
				setTimeout(function(){
					mostrarMas();
					mostrarMenos();
				},500);
			});
		} else {
			console.log(users.data);
		}
		app.hideProgress();
	});
}

function cargarResultadoList(data, pag){
	$.each(data, function (key, item) {
		if ($('#'+item.login).length === 0) {
			$('#list-login').append(
				'<li id="'+item.login+'">'+
					'<a href="#" class="item-link smart-select" data-searchbar="true" data-searchbar-placeholder="Filtrar" data-navbar-theme="amovil">'+
						'<select name="ubicaciones" multiple>'+
						'</select>'+
						'<div class="item-content">'+
				          '<div class="item-inner">'+
				            '<div class="item-title">'+item.login+'</div>'+
				          '</div>'+
				        '</div>'+
				    '</a>'+
				'</li>'
			);
		}
		
		if ($('#'+item.login+' select optgroup[label="'+item.locationDM+'"]').length === 0) {
			$('#'+item.login+' select').append(
				'<optgroup label="'+item.locationDM+'"></optgroup>'
			);
		}

		$('#'+item.login+' select optgroup[label="'+item.locationDM+'"').append(
			'<option value="'+item.deviceDM+'" latDM="'+item.latDM+'" longDM="'+item.longDM+'">'+item.FecDM+'</span>'+'</option>'
		);
	});

	cargarBusqueda(pag);
}

var cont = 0;
var contador;

$(document).on("mouseup", function() {
      cont = 0;
      contador !== undefined ? clearTimeout(contador) : null;
});

function onResume() {
  	contador = setTimeout(function(){
        cont++;
        if(cont === 5){
            app.logout();
        }
  	}, 60000);
}