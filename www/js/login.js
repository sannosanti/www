$.support.cors = true;
$.mobile.allowCrossDomainPages = true;
$.mobile.pushStateEnabled = false;

$(document).on('pageinit', '#logon', function() {
    if (app.getMobile()) {
        document.addEventListener("deviceready", cerrarSesion, false);
        document.addEventListener("deviceready", onDeviceReady, false);
        document.addEventListener("deviceready", loadCompanys, false);
    } else {
        cerrarSesion();
        onDeviceReady();
        loadCompanys();
    }
    app.initialize();
});

function loadCompanys() {
    app.showProgress();
    app.MultiAjaxSync('/login', 'GET', null, function(companys) {
        if (companys.status) {
            $.each(companys.data, function(key, item) {
                $('<option>', { text: item.nitcy, value: item.idecy }).appendTo($('#companys'));
            });
            app.hideProgress();
        } else {
            app.Notification('No se encontraron compañias', 'recargar', function() {
                loadCompanys();
            });
        }
    });
}

function cerrarSesion() {
    app.logout();
}

document.addEventListener("backbutton", function(e) {
    if (localStorage.length === 0) {
        navigator.app.exitApp();
    }
}, false);

$('#login').click(function() {
    var ajax_data = {
        'compania': $('#companys').val(),
        'usuario': $('#user').val(),
        'password': $('#pass').val()
    };
    app.showProgress();
    app.MultiAjaxSync('/login', 'GET', ajax_data, function(user) {
        if (user.status) {
            if (user.data === 'Usuario Encontrado') {
                var sesion = {
                    'compania': $('#companys').val(),
                    'usuario': $('#user').val()
                }
                app.setSesion(sesion);
                app.hideProgress();
                $(location).attr('href', 'menu.html');
            } else {
                app.Notification(user.data, '', undefined);
            }
        }
        app.hideProgress();
    });
});

$('#user').keydown(function(event) {
    if (event.keyCode === 13) {
        $('#pass').focus();
    }
});

$('#pass').keydown(function(event) {
    if (event.keyCode === 13) {
        $('#login').click();
    }
});

$('#user, #pass').focus(function() {
    $('.page-content').scrollTop(150);
});