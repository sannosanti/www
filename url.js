//uri = 'http://10.66.36.40/AmovilRest/api';                    Bolivariana
//uri = 'http://c2352/AmovilRest/api';                          Imbanaco
//uri = 'https://web.imbanaco.com.co/amovilrest/api';           Imbanaco publica
//uri = 'http://10.20.131.26/AMovilRest/api';                   La Colina
//uri = 'http://192.168.0.14/amovilrest/api';                   Frioaire
//uri = 'http://190.85.141.210/amovilrest/api';                 Frioaire publica
//uri = 'http://172.17.1.65/amovilrest/api';                    Fundacion Cardio Infantil
//uri = 'http://190.85.30.148/amovilrest/api';                  General Fire Control publica
//uri = 'http://mantenserv/amovilrest/api';                     Higuera Escalante
//uri = 'http://201.221.128.168/amovilrest/api';                Higuera Escalante publica
//uri = 'http://10.1.0.25/amovilrest/api';                      FSFB
//uri = 'http://192.168.9.7/amovilrest/api';                    Cardio VID
//uri = 'http://190.7.153.174:8081/api'; //explora EXTERNO
//uri = 'http://192.168.1.25/amMovil/api';						CDI
//uri = 'http://209.160.64.6/amovilrest/api'; 					San Lorenzo
//uri = 'http://10.11.1.130/amovilrest/api'; 					Metrosalud
//uri = 'http://190.144.171.20/amovilrest/api';					UDN
// uri = 'http://192.168.0.199:80/AmovilRest/api';              Amilab

//uri = 'http://200.116.165.6:8081/amovilrest/api';             MANTIS
//uri = 'http://209.160.64.82/AmovilRest/api';                  USA
//uri = 'https://192.168.0.151/AmovilRest/api';                 Mi pc
//uri = 'http://amvm/amovilrest/api';192.168.0.104              am virtual 2005

var uri = '';

function onDeviceReady() {
    checkConnection();
    manejaSesiones();
}

function checkConnection() {
    window.isphone = false;
    if (document.URL.indexOf("http://") === -1 && document.URL.indexOf("https://") === -1) { window.isphone = true; }
    if (window.isphone) {
        var networkState = navigator.connection.type;
        uri = 'https://192.168.0.151/AmovilRest/api';
        if (networkState == Connection.WIFI) {} else {
            if (networkState == Connection.CELL || networkState == Connection.CELL_2G || networkState == Connection.CELL_3G ||
                networkState == Connection.CELL_4G) {
                uri = 'https://192.168.0.151/AmovilRest/api';
            } else {
                if (networkState == Connection.NONE) {
                    navigator.notification.alert(
                        'No está conectado a internet',
                        alertDismissed,
                        'AMovil',
                        'Ok'
                    );
                }
            }
        }
    } else {
        uri = 'http://localhost/AmovilRest/api';
    }
    //regisUFDM();
}
//quiero verlo, inviteme a comer primero 7u7 JAJAJA-.-
function alertDismissed() {}

function manejaSesiones() {
    setTimeout(function() {
        var ajax_data;
        if (localStorage.length == 0) {
            ajax_data = { 'compania': '0', 'usuario': '' };
        } else {
            ajax_data = { 'compania': localStorage.compania, 'usuario': localStorage.usuario };
        }
        $.ajax({
            type: 'GET',
            url: uri + '/inventario',
            crossDomain: true,
            data: ajax_data,
            dataType: 'json',
            success: function(response) {
                //console.log(response);
            },
            error: function(error) {
                console.log(JSON.stringify(error));
            }
        });

    }, 1000);
}

/*
    function regisUFDM(){
        if(localStorage.length !== 0){
            navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError);
        }
    }

    function geolocationSuccess(position){
        var latlng = {
            'format': 'json',
            'lat': parseFloat(position.coords.latitude),
            'lon': parseFloat(position.coords.longitude)
        };
        $.ajax({
            type       : 'GET',
            url        : 'https://nominatim.openstreetmap.org/reverse',
            crossDomain: true,
            beforeSend : function() {$.mobile.loading('show')},
            complete   : function() {$.mobile.loading('hide')},
            data       : latlng,
            dataType   : 'json',
            success    : function(response) {
                if(window.isphone) {
                    var deviceName = cordova.plugins.deviceName;
                }else{
                    var deviceName = {
                        'name': 'mi pc'
                    }
                }
                var ajax_data = {'compania': localStorage.compania, 'usuario': localStorage.usuario, 'latitude': position.coords.latitude, 'longitude': position.coords.longitude, "device": deviceName.name, "location": response.display_name};
                insertPosition(ajax_data);
            },
            error      : function(xhr, ajaxOptions, thrownError) {
            }
        });
    }

    function insertPosition(ajax_data){
        $.ajax({
            type       : 'GET',
            url        : uri + '/login',
            crossDomain: true,
            beforeSend : function() {$.mobile.loading('show')},
            complete   : function() {$.mobile.loading('hide')},
            data       : ajax_data,
            dataType   : 'json',
            success    : function(response) {
            },
            error      : function(xhr, ajaxOptions, thrownError) {
            }
        });
    }

    function geolocationError(error){
        alert(error.message);
    }
    */