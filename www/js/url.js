var uri = '';

function onDeviceReady() {
    checkConnection();
}

function checkConnection() {
    window.isphone = false;
    if (document.URL.indexOf("http://") === -1 && document.URL.indexOf("https://") === -1) {
        window.isphone = true;
    }
    if (window.isphone) {
        var networkState = navigator.connection.type;

        if (networkState == Connection.WIFI) {
            uri = 'http://local.winsoftware.com.co:9090/AMovilRest/api';
        } else {
            if (networkState == Connection.CELL || networkState == Connection.CELL_2G || networkState == Connection.CELL_3G ||
                networkState == Connection.CELL_4G) {
                uri = 'http://local.winsoftware.com.co:9090/AMovilRest/api';
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
        uri = 'http://local.winsoftware.com.co:9090/AMovilRest/api';
    }
}

function alertDismissed() {

}