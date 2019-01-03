var cont = 0;
var contador;

$(document).on("mouseup", function() {
      cont = 0;
      contador !== undefined ? clearTimeout(contador) : null;
});

function alertDismissed() {
    // do something
}

function onResume() {
    contador = setTimeout(function(){
        cont++;
        if(cont === 5){
            cerrarSesion();
        }
    }, 60000);
}

function cerrarSesion(){
      checkConnection();
      var ajax_data = {'compania': localStorage.compania, 'usuario': localStorage.usuario};
      $.ajax({
            type       : 'GET',
            url        : uri + '/login',
            crossDomain: true,
            beforeSend : function() {$.mobile.loading('show')},
            complete   : function() {$.mobile.loading('hide')},
            data       : ajax_data,
            dataType   : 'json',
            success    : function(response) {
                        document.location.href = 'main.html';
                        localStorage.clear();
                  },
            error      : function(xhr, ajaxOptions, thrownError) {
                console.error(JSON.stringify(response));
                $("#error").show();
                $("#error").text(response);
            }
      });
}