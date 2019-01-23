/***************************************** GENERALES ***********************************************/
function $_GET(param) {
    url = document.URL;
    url = String(url.match(/\?+.+/));
    url = url.replace("?", "");
    url = url.split("&");
    x = 0;
    while (x < url.length) {
        p = url[x].split("=");
        if (p[0] == param) {
            return decodeURIComponent(p[1]);
        }
        x++;
    }
}
/***************************************** GENERALES ***********************************************/


//**************** UF ****************************************//

function cargarUF() {
    $("#UFlist li").remove();

    var parametro = localStorage.compania;
    $.ajax({
        type: 'GET',
        url: uri + '/uf/' + parametro,
        crossDomain: true,
        beforeSend: function() { $.mobile.loading('show') },
        complete: function() { $.mobile.loading('hide') },
        dataType: 'json',
        success: function(response) {
            $("#UFlist").listview();
            $.each(response, function(key, item) {
                $("#UFlist").append(' <li>' + item.UFs + ' - ' + item.NomUF + '</li>');
            });
            $("#UFlist").listview('refresh');
        },
        error: function(xhr, ajaxOptions, thrownError) {}
    });

    $(document).on("click", ".autocompleteUFs li", function() {
        var selectedItem = $(this).html();
        $(this).parent().parent().find('input').val(selectedItem);
        $('.autocompleteUFs').hide();
    });

    $(document).on("focus", "#UF", function() {
        var values = $('#UF').val();
        if (values == "") { $('.autocompleteUFs').show(); }
    });

    $(document).on("keydown", "#UF", function() { $('.autocompleteUFs').hide(); });
    $(".autocompleteUFs").on("listviewbeforefilter", function(e, data) { $('.autocompleteUFs').show(); })
    $('.autocompleteUFs').hide();
}

function validarUF() {
    var val = $('#UF').val();
    var x = false;
    if (val === "") {
        $(".autocompleteUFs li").each(function(index) {
            var selectedItem = $(this).html();
            if (val == selectedItem) { x = true; }
        });
    } else { x = true; }
    if (x == false) {
        navigator.notification.alert(
            'Debe escoger una Ubicaci\u00f3n F\u00edsica v\u00e1lida de la lista',
            alertDismissed,
            'AMovil',
            'Ok'
        );
    }
    return x;
}



//***********************************************************************************************//
function cargarUFisica() {
    $("#UFisicalist li").remove();
    var parametro = localStorage.compania;
    $.ajax({
        type: 'GET',
        url: uri + '/uf/' + parametro,
        crossDomain: true,
        beforeSend: function() { $.mobile.loading('show') },
        complete: function() { $.mobile.loading('hide') },
        dataType: 'json',
        success: function(response) {
            $("#UFlist").listview();
            $.each(response, function(key, item) {
                $("#UFisicalist").append(' <li>' + item.UFs + ' - ' + item.NomUF + '</li>');
            });
            $("#UFisicalist").listview('refresh');
        },
        error: function(xhr, ajaxOptions, thrownError) {}
    });

    $(document).on("click", ".autocompleteUFisica li", function() {
        var selectedItem = $(this).html();
        $(this).parent().parent().find('input').val(selectedItem);
        $('.autocompleteUFisica').hide();
    });

    $(document).on("focus", "#UFisica", function() {
        var values = $('#UFisica').val();
        if (values == "") { $('.autocompleteUFisica').show(); }
    });

    $(document).on("keydown", "#UFisica", function() { $('.autocompleteUFisica').hide(); });
    $(".autocompleteUFisica").on("listviewbeforefilter", function(e, data) { $('.autocompleteUFisica').show(); })
    $('.autocompleteUFisica').hide();
}
//**************** UF ****************************************//



//**************** Centro de costos ****************************************//
function cargarCC() { //el caso es qe esta usando este
    $("#ccostolist li").remove();

    var parametro = localStorage.compania;
    $.ajax({
        type: 'GET',
        url: uri + '/ccostos/' + parametro,
        crossDomain: true,
        beforeSend: function() { $.mobile.loading('show') },
        complete: function() { $.mobile.loading('hide') },
        dataType: 'json',
        success: function(response) {
            $("#ccostolist").listview();
            $.each(response, function(key, item) {
                $("#ccostolist").append(' <li>' + item.IdeCC + ' - ' + item.NomCC + '</li>');
            });
            $("#ccostolist").listview('refresh');
        },
        error: function(xhr, ajaxOptions, thrownError) {}
    });

    $(document).on("click", ".autocompleteCCs li", function() {
        var selectedItem = $(this).html();
        $(this).parent().parent().find('input').val(selectedItem);
        $('.autocompleteCCs').hide();
    });

    $(document).on("focus", "#CC", function() {
        var values = $('#CC').val();
        if (values == "") { $('.autocompleteCCs').show(); }
    });

    $(document).on("keydown", "#CC", function() { $('.autocompleteCCs').hide(); });
    $(".autocompleteCCs").on("listviewbeforefilter", function(e, data) { $('.autocompleteCCs').show(); })
    $('.autocompleteCCs').hide();
}


function validarCC() {
    var val = $('#CC').val();
    var x = false;
    if (val === "") {
        $(".autocompleteCCs li").each(function(index) {
            var selectedItem = $(this).html();
            if (val == selectedItem) { x = true; }
        });
    } else { x = true; }
    if (x == false) {
        navigator.notification.alert(
            'Debe escoger un Centro de Costo v\u00e1lido de la lista',
            alertDismissed,
            'AMovil',
            'Ok'
        );
    }
    return x;
}

///////////////////////////////////////////////////////////////////////////////

function cargarCCosto() {
    $("#cclist li").remove();
    var parametro = localStorage.compania;
    $.ajax({
        type: 'GET',
        url: uri + '/ccostos/' + parametro,
        crossDomain: true,
        beforeSend: function() { $.mobile.loading('show') },
        complete: function() { $.mobile.loading('hide') },
        dataType: 'json',
        success: function(response) {
            $("#cclist").listview();
            $.each(response, function(key, item) {
                $("#cclist").append(' <li>' + item.IdeCC + ' - ' + item.NomCC + '</li>');
            });
            $("#cclist").listview('refresh');
        },
        error: function(xhr, ajaxOptions, thrownError) {}
    });

    $(document).on("click", ".autoCCosto li", function() {
        var selectedItem = $(this).html();
        $(this).parent().parent().find('input').val(selectedItem);
        $('.autoCCosto').hide();
    });

    $(document).on("focus", "#CCosto", function() {
        var values = $('#CCosto').val();
        if (values == "") { $('.autoCCosto').show(); }
    });

    $(document).on("keydown", "#CCosto", function() { $('.autoCCosto').hide(); });
    $(".autoCCosto").on("listviewbeforefilter", function(e, data) { $('.autoCCosto').show(); })
    $('.autoCCosto').hide();
}

//**************** Centro de costos ****************************************//



//**************** RESPONSABLES ****************************************//
function cargarResponsables() {
    $("#Responsable li").remove();
    var parametro = localStorage.compania;
    $.ajax({
        type: 'GET',
        url: uri + '/responsable/' + parametro,
        crossDomain: true,
        beforeSend: function() { $.mobile.loading('show') },
        complete: function() { $.mobile.loading('hide') },
        dataType: 'json',
        success: function(response) {
            $("#Responsable").listview();
            $.each(response, function(key, item) {
                $("#Responsable").append(' <li>' + item.IdeRV + ' - ' + item.NomRV + '</li>');
            });
            $("#Responsable").listview('refresh');
        },
        error: function(xhr, ajaxOptions, thrownError) {}
    });

    $(document).on("click", ".autocomplete li", function() {
        var selectedItem = $(this).html();
        $(this).parent().parent().find('input').val(selectedItem);
        $('.autocomplete').hide();
    });

    $(document).on("focus", "#filterable-input", function() {
        var values = $('#filterable-input').val();
        if (values == "") { $('.autocomplete').show(); }
    });

    $(document).on("keydown", "#filterable-input", function() { $('.autocomplete').hide(); });
    $(".autocomplete").on("listviewbeforefilter", function(e, data) { $('.autocomplete').show(); })
    $('.autocomplete').hide();
}

function validarResponsable() {
    var val = $('#filterable-input').val();
    var x = false;
    if (val === "") {
        $(".autocomplete li").each(function(index) {
            var selectedItem = $(this).html();
            if (val == selectedItem) { x = true; }
        });
    } else { x = true; }
    if (x == false) {
        navigator.notification.alert(
            'Debe escoger un responsable v\u00e1lido de la lista',
            alertDismissed,
            'AMovil',
            'Ok'
        );
    }
    return x;
}
//**************** RESPONSABLES ****************************************//

function cargarRes() {
    $("#Res li").remove();
    var parametro = localStorage.compania;
    $.ajax({
        type: 'GET',
        url: uri + '/responsable/' + parametro,
        crossDomain: true,
        beforeSend: function() { $.mobile.loading('show') },
        complete: function() { $.mobile.loading('hide') },
        dataType: 'json',
        success: function(response) {
            $("#Responsable").listview();
            $.each(response, function(key, item) {
                $("#Res").append(' <li>' + item.IdeRV + ' - ' + item.NomRV + '</li>');
            });
            $("#Res").listview('refresh');
        },
        error: function(xhr, ajaxOptions, thrownError) {}
    });

    $(document).on("click", ".autocompleteRes li", function() {
        var selectedItem = $(this).html();
        $(this).parent().parent().find('input').val(selectedItem);
        $('.autocompleteRes').hide();
    });

    $(document).on("focus", "#rsp", function() {
        var values = $('#rsp').val();
        if (values == "") { $('.autocompleteRes').show(); }
    });

    $(document).on("keydown", "#rsp", function() { $('.autocompleteRes').hide(); });
    $(".autocompleteRes").on("listviewbeforefilter", function(e, data) { $('.autocompleteRes').show(); })
    $('.autocompleteRes').hide();
}


//**************** RESPONSABLES ****************************************//

//**************** ESTADOS ****************************************//
function cargarEstados() {
    var parametro = localStorage.compania;
    $.ajax({
        type: 'GET',
        url: uri + '/estado/' + parametro,
        crossDomain: true,
        beforeSend: function() { $.mobile.loading('show') },
        complete: function() { $.mobile.loading('hide') },
        dataType: 'json',
        success: function(response) {
            $.each(response, function(key, item) {
                $('<option>', { text: item.NomES, value: item.ES }).appendTo($('#nEstado'));
            });
            $('#nEstado').selectmenu("refresh", true);
        },
        error: function(xhr, ajaxOptions, thrownError) {
            $('<option>', { text: 'no se encuentra ningun estado', value: '0' }).appendTo($('#nEstado'));
            $('#nEstado').selectmenu("refresh", true);
        }
    });
}
//**************** ESTADOS ****************************************//

function validarObli() {
    var x = true;
    if ($('#codigo').val() === "") {
        x = false;
        navigator.notification.alert(
            'Debe escribir un código válido',
            alertDismissed,
            'AMovil',
            'Ok'
        );
    } else if ($('#codigo').val() !== "" && $('#descripcion').val() === "") {
        x = false;
        navigator.notification.alert(
            'Debe escribir una descripción válida',
            alertDismissed,
            'AMovil',
            'Ok'
        );
    }
    return x;
}


function alertDismissed() {
    // do something
}

/***************************************** BUSQUEDA ***********************************************/
var eqscargadas = null,
    eqsI = null;

function BuscarEquipo(opcion, tipofiltrado) {
    checkConnection();
    $('#tblDetalleEquipo li').remove();

    if ((opcion == 1 || opcion == 4) && valor == '') { //aqui puede cambiar esto para validar campos vacios
        alert('Debe llenar el campo valor');
    } else {
        var ajax_data = {
            'compania': localStorage.compania,
            'usuario': localStorage.usuario,
            'parametro1': $('#check0').prop("checked") ? "1" : "0", //el if simple si es true pone 1 y sino 0
            'valor1': $('#codigo0').val(),
            'parametro2': $('#check1').prop("checked") ? "1" : "0",
            'valor2': $('#codigo1').val(),
            'parametro3': $('#check2').prop("checked") ? "1" : "0",
            'valor3': $('#codigo2').val(),
            'parametro4': $('#check3').prop("checked") ? "1" : "0",
            'valor4': $('#codigo3').val(),
            'parametro5': $('#check4').prop("checked") ? "1" : "0",
            'valor5': $('#codigo4').val(),
            'parametro6': $('#check5').prop("checked") ? "1" : "0",
            'valor6': $('#codigo5').val(),
            'parametro7': $('#check6').prop("checked") ? "1" : "0",
            'valor7': $('#filterable-input').val(),
            'parametro8': $('#check7').prop("checked") ? "1" : "0",
            'valor8': $('#codigo7').val(),
            'parametro9': $('#check8').prop("checked") ? "1" : "0",
            'valor9': $('#CC').val(),
            'parametro10': $('#check9').prop("checked") ? "1" : "0",
            'valor10': $('#UF').val(),

        };
        $.ajax({
            type: 'GET',
            url: uri + '/equipos',
            crossDomain: true,
            beforeSend: function() { $.mobile.loading('show') },
            complete: function() { $.mobile.loading('hide') },
            data: ajax_data,
            dataType: 'json',
            success: function(response) {
                if (response.length == 0) {
                    alert('No se encontraron equipos');
                    $('#total').html("");
                } else {
                    if (response[0].eq !== "no tiene permisos") {
                        $('#total').html("Total Encontrados: " + response.length);
                        if (response.length == 1) {
                            $.each(response, function(key, item) {
                                document.location.href = 'DetalleActivo.html?cod=' + item.eq;
                            });
                        } else {
                            eqscargadas = response;
                            $.each(response, function(key, item) {
                                var colorEstado = "";
                                var bolita = '';
                                if (item.cant > 0) {
                                    bolita = '<div class="doc"></div>';
                                }
                                if (item.estado.substring(0, 1) == 'A') { colorEstado = "green"; } else { colorEstado = "red"; }
                                if (opcion == 4) {
                                    document.location.href = 'DetalleActivo.html?cod=' + response[0].eq;
                                } else {
                                    $('#tblDetalleEquipo').append(
                                        '<li>' +
                                        '<a href="DetalleActivo.html?cod=' + item.eq + '" data-ajax="false" data-rel="external">' +
                                        '<h2>' + item.codigo + ' | ' + item.activofijo + '</h2>' + bolita +
                                        '<p>' + item.descripcion + '</p>' +
                                        '<p>' + item.ccosto + ' | ' + item.ubicacionFisica + '</p>' +
                                        '<p> <strong style="color:' + colorEstado + ' !important">' + item.estado + '</strong></p>' +
                                        '</a>' +
                                        '</li>');

                                    if (key === 250) {
                                        eqsI = (key + 1);
                                        return false;
                                    }
                                }
                            });
                            $('#tblDetalleEquipo').listview('refresh');
                            definirCarga();
                            $('.inset').show();
                        }
                    } else {
                        navigator.notification.alert(
                            'No tiene permisos para consultar',
                            alertDismissed,
                            'AMovil',
                            'Ok'
                        );
                    }
                }
                if (opcion == 1 || opcion == 4) {
                    $("#codigo").val('');
                    $("#codigo").focus();
                }

            },
            error: function(xhr, ajaxOptions, thrownError) {}
        });
    }
}


/***************************************** BUSQUEDA EQ A ACTUALIZAR***********************************************/

function BuscarEquipoActualizar(tipofiltrado) {
    checkConnection();
    $('#tblDetalleEquipo li').remove();
    // $('#tblDetalleEquipo').remove(); 
    var valor = $('#codigo').val();
    par = $('#parametro').val();
    if (par == 6) { valor = $('#rsp').val(); }
    if (par == 9) { valor = $('#UFisica').val(); }
    if (par == 8) { valor = $('#CCosto').val(); }

    var ajax_data = { 'codigo': valor, 'parametro': par, 'compania': localStorage.compania, 'filtrado': tipofiltrado, 'usuario': localStorage.usuario };
    $.ajax({
        type: 'GET',
        url: uri + '/equipos',
        crossDomain: true,
        beforeSend: function() { $.mobile.loading('show') },
        complete: function() { $.mobile.loading('hide') },
        data: ajax_data,
        dataType: 'json',
        success: function(response) {
            if (response.length == 0) {
                alert('No se encontraron equipos');
                $('#total').html("");
            } else {
                if (response[0].eq !== "no tiene permisos") {
                    $('#total').html("Total Encontrados: " + response.length);
                    var i = 0;
                    var newRows = '';
                    $.each(response, function(key, item) {
                        var colorEstado = "";
                        if (item.estado.substring(0, 1) == 'A') { colorEstado = "green"; } else { colorEstado = "red"; }

                        newRows = newRows + '<li>' +
                            '<a href="#" style="padding-top: 0px;padding-bottom: 0px;padding-right: 12px;padding-left: 0px;">' +
                            '<label style="border-top-width: 0px;margin-top: 0px;border-bottom-width: 0px;margin-bottom: 0px;border-left-width: 0px;border-right-width: 0px;" data-corners="false">' +
                            '<input type="checkbox" id="chk' + i + '"></input>' +
                            '<input type="hidden" id="eq' + i + '" value="' + item.eq + '"></td>' +
                            '<label for="chk' + i + '">' +
                            '<h2> <strong>' + item.codigo + ' | ' + item.activofijo + '</strong></h2>' +
                            '<p>' + item.descripcion + '</p>' +
                            '<p>' + item.ccosto + ' | ' + item.ubicacionFisica + '</p>' +
                            '<p>' + item.responsable + '</p>' +
                            '<p> <strong style="color:' + colorEstado + ' !important">' + item.estado + '</strong></p>' +
                            '</label>' +
                            '</label>' +
                            '</a>' +
                            '</li>';

                        i++;

                    });
                    $("#chkGeneral").prop("checked", false);
                    $("#chkGeneral").checkboxradio("refresh")

                    $('#tblDetalleEquipo').listview().append(newRows).listview("refresh").trigger("create");
                    $('.inset').show();
                    //$('#tblDetalleEquipo').listview('refresh');

                    //$( "table#tblDetalleEquipo tbody" )
                    //  // Append the new rows to the body
                    //  .append( newRows )
                    //  // Call the refresh method
                    //  .closest( "table#tblDetalleEquipo" )
                    //  .table( "refresh" )
                    //  // Trigger if the new injected markup contain links or buttons that need to be enhanced
                    //  .trigger( "create" );

                    // //$('#tblDetalleEquipo').table( "refresh" );
                } else {
                    navigator.notification.alert(
                        'No tiene permisos para consultar',
                        alertDismissed,
                        'AMovil',
                        'Ok'
                    );
                }
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {}
    });
}
/***************************************** BUSQUEDA ***********************************************/

function seleccionarTodo() {
    var x = $('#chkGeneral').prop("checked");
    $('#tblDetalleEquipo li').each(function() {
        //$(this).find('td').each(function () {
        var clase = $(this).attr('class');
        if (clase != "ui-screen-hidden") {
            var chk = $(this).find('input[type="checkbox"]');
            if (x) {
                chk.prop("checked", true).checkboxradio('refresh');
            } else { chk.prop("checked", false).checkboxradio('refresh'); }
        }

        //})
    })
}


//------------------------------------------------------------------------------------------
function definirCarga() {
    $(document).on("scroll", function() {
        var scrollHeight = $(document).height();
        var scrollPosition = $(window).height() + $(window).scrollTop();
        if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
            cargarResto();
        }
    });
}

function cargarResto() {
    if (eqsI !== null) {
        var i = eqsI;
        while (i < eqscargadas.length && i < (eqsI + 20)) {
            var colorEstado = "";
            var bolita = '';
            if (eqscargadas[i].cant > 0) {
                bolita = '<div class="doc"></div>';
            }
            if (eqscargadas[i].estado.substring(0, 1) == 'A') { colorEstado = "green"; } else { colorEstado = "red"; }
            $('#tblDetalleEquipo').append(
                '<li>' +
                '<a href="DetalleActivo.html?cod=' + eqscargadas[i].eq + '" data-ajax="false" data-rel="external">' +
                '<h2>' + eqscargadas[i].codigo + ' | ' + eqscargadas[i].activofijo + '</h2>' + bolita +
                '<p>' + eqscargadas[i].descripcion + '</p>' +
                '<p>' + eqscargadas[i].ccosto + ' | ' + eqscargadas[i].ubicacionFisica + '</p>' +
                '<p> <strong style="color:' + colorEstado + ' !important">' + eqscargadas[i].estado + '</strong></p>' +
                '</a>' +
                '</li>');
            i++;
        }
        if (i < eqscargadas.length) {
            eqsI = (i + 1);
        } else {
            eqsI = null;
        }
        $('#tblDetalleEquipo').listview('refresh');
    }
}