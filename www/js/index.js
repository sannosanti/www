window.app = {

    initialize: function() {
        app.hideProgress();
    },

    getMobile: function(){
        var isphone = false;
        if(document.URL.indexOf("http://") === -1 && document.URL.indexOf("https://") === -1) {
            isphone = true;
        }
        return isphone;
    },

    getSesion: function(){
        if (localStorage !== undefined) {
            return localStorage;
        } else {
            return "";
        }
    },

    setSesion: function(sesion){
        localStorage = JSON.stringify(sesion);
    },

    clearSesion: function(){
        localStorage.clear();
    },

    showProgress: function(){
        $('.progressbar-infinite').slideDown();
    },

    hideProgress: function(){
        $('.progressbar-infinite').slideUp();
    },

    MultiAjaxSync: function(pag, type, ajax_data, callback){
        var data;
        checkConnection();
        if (uri !== '') {
            $.ajax({
                type       : type,
                url        : uri + pag,
                crossDomain: true,
                async      : true,
                data       : ajax_data,
                dataType   : 'json',
                success    : function(response) {
                    data = {'status': true, 'data': response};
                    callback(data);
                },
                error      : function(xhr, ajaxOptions, thrownError) {
                    data = {'status': false, 'data': ''};
                    callback(data);
                }
            });
        } else {
            data = {'status': false, 'data': ''};
            callback(data);
        }
    },

    MultiAjaxAsync: function(pag, type, ajax_data, callback){
        var data;
        checkConnection();
        if (uri !== '') {
            $.ajax({
                type       : type,
                url        : uri + pag,
                crossDomain: true,
                data       : ajax_data,
                dataType   : 'json',
                success    : function(response) {
                    data = {'status': true, 'data': response};
                    callback(data);
                },
                error      : function(xhr, ajaxOptions, thrownError) {
                    data = {'status': false, 'data': ''};
                    callback(data);
                }
            });
        } else {
            data = {'status': false, 'data': ''};
            callback(data);
        }
    },

    Notification: function(mensaje, boton, event){
        myApp.closeNotification(".notification-item");
        myApp.addNotification({
            message: mensaje,
            button: {
                text: boton,
                color: 'blue'
            },
            onClose: function () {
                event !== undefined ? event() : null;
            }
        });
    },

    logout: function(){
        if (localStorage.sesion !== undefined) {
            app.showProgress();
            var ajax_data = app.getSesion();
            app.MultiAjaxSync('/login', 'GET', ajax_data, function(log){
                app.clearSesion();
                app.hideProgress();
                $(location).attr('href', '../../login.html');
            });
        }
    }

};