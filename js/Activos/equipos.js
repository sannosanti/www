/***************************************** GENERALES ***********************************************/
function $_GET(param){
  url = document.URL;
  url = String(url.match(/\?+.+/));
  url = url.replace("?", "");
  url = url.split("&");
  x = 0;
  while (x < url.length){
    p = url[x].split("=");
    if (p[0] == param)  {
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
        type       : 'GET',
        url        : uri + '/uf/' + parametro,
        crossDomain: true,
        beforeSend : function() {$.mobile.loading('show')},
        complete   : function() {$.mobile.loading('hide')},
        dataType   : 'json',
        success    : function(response) {
                        $("#UFlist").listview();
                        $.each(response, function (key, item) {
                            $("#UFlist").append(' <li>'+ item.UFs +' - ' + item.NomUF +'</li>');
                        });
                        $("#UFlist").listview('refresh');
                    },
        error      : function(xhr, ajaxOptions, thrownError) {}
    });

    $( document).on( "click", ".autocompleteUFs li", function() {      
        var selectedItem = $(this).html();
        $(this).parent().parent().find('input').val(selectedItem);   
        $('.autocompleteUFs').hide();     
    });

    $( document).on( "focus", "#UF", function() {      
       var values = $('#UF').val();
       if (values == ""){$('.autocompleteUFs').show();}
    });

    $( document).on( "keydown", "#UF", function() {$('.autocompleteUFs').hide();});
    $( ".autocompleteUFs" ).on( "listviewbeforefilter", function ( e, data ) {$('.autocompleteUFs').show();})
    $('.autocompleteUFs').hide(); 
}

function validarUF() {
  var val = $('#UF').val();
  var x = false;
  if (val != ""){
      $(".autocompleteUFs li").each(function (index) {
          var selectedItem = $(this).html();
          if(val == selectedItem){x = true;}
      });
  }else{ x = true;}
  if(x == false){alert('Debe escoger una Ubicaci\u00f3n F\u00edsica v\u00e1lida de la lista');}
      return x;
}

   

//***********************************************************************************************//
function cargarUFisica() {
  $("#UFisicalist li").remove();
  var parametro = localStorage.compania;
  $.ajax({
    type       : 'GET',
    url        : uri + '/uf/' + parametro,
    crossDomain: true,
    beforeSend : function() {$.mobile.loading('show')},
    complete   : function() {$.mobile.loading('hide')},
    dataType   : 'json',
    success    : function(response) {
                  $("#UFlist").listview();
                  $.each(response, function (key, item) {
                    $("#UFisicalist").append(' <li>'+ item.UFs +' - ' + item.NomUF +'</li>');
                  });
                  $("#UFisicalist").listview('refresh');
                },
    error      : function(xhr, ajaxOptions, thrownError) {}
  });

  $( document).on( "click", ".autocompleteUFisica li", function() {      
    var selectedItem = $(this).html();
    $(this).parent().parent().find('input').val(selectedItem);   
    $('.autocompleteUFisica').hide();     
  });

  $( document).on( "focus", "#UFisica", function() {      
    var values = $('#UFisica').val();
    if (values == ""){$('.autocompleteUFisica').show(); }
  });

  $( document).on( "keydown", "#UFisica", function() { $('.autocompleteUFisica').hide(); });
  $( ".autocompleteUFisica" ).on( "listviewbeforefilter", function ( e, data ) {$('.autocompleteUFisica').show();})
  $('.autocompleteUFisica').hide(); 
}
//**************** UF ****************************************//



//**************** Centro de costos ****************************************//
function cargarCC() {
    $("#ccostolist li").remove();

    var parametro = localStorage.compania;
    $.ajax({
        type       : 'GET',
        url        : uri + '/ccostos/' + parametro,
        crossDomain: true,
        beforeSend : function() {$.mobile.loading('show')},
        complete   : function() {$.mobile.loading('hide')},
        dataType   : 'json',
        success    : function(response) {
                      $("#ccostolist").listview();
                      $.each(response, function (key, item) {
                          $("#ccostolist").append(' <li>'+ item.IdeCC + ' - ' + item.NomCC +'</li>');
                      });
                      $("#ccostolist").listview('refresh');
                    },
        error      : function(xhr, ajaxOptions, thrownError) {}
    });

    $( document).on( "click", ".autocompleteCCs li", function() {      
        var selectedItem = $(this).html();
        $(this).parent().parent().find('input').val(selectedItem);   
        $('.autocompleteCCs').hide();     
    });

    $( document).on( "focus", "#CC", function() {      
        var values = $('#CC').val();
        if (values == ""){$('.autocompleteCCs').show();}
    });

    $( document).on( "keydown", "#CC", function() {$('.autocompleteCCs').hide();});
    $( ".autocompleteCCs" ).on( "listviewbeforefilter", function ( e, data ){$('.autocompleteCCs').show();})
    $('.autocompleteCCs').hide(); 
}


function validarCC() {
  var val = $('#CC').val();
  var x = false;
  if (val != ""){
      $(".autocompleteCCs li").each(function (index) {
          var selectedItem = $(this).html();
          if(val == selectedItem){x = true;}
      });
  }else{ x = true;}
  if(x == false){alert('Debe escoger un Centro de Costo v\u00e1lido de la lista');}
      return x;
}

///////////////////////////////////////////////////////////////////////////////

function cargarCCosto() {
  $("#cclist li").remove();
  var parametro = localStorage.compania;
  $.ajax({
    type       : 'GET',
    url        : uri + '/ccostos/' + parametro,
    crossDomain: true,
    beforeSend : function() {$.mobile.loading('show')},
    complete   : function() {$.mobile.loading('hide')},
    dataType   : 'json',
    success    : function(response) {
                  $("#cclist").listview();
                  $.each(response, function (key, item) {
                    $("#cclist").append(' <li>'+ item.IdeCC + ' - ' + item.NomCC +'</li>');
                  });
                  $("#cclist").listview('refresh');
                },
    error      : function(xhr, ajaxOptions, thrownError) {}
  });

  $( document).on( "click", ".autoCCosto li", function() {      
    var selectedItem = $(this).html();
    $(this).parent().parent().find('input').val(selectedItem);   
    $('.autoCCosto').hide();     
  });

  $( document).on( "focus", "#CCosto", function() {      
    var values = $('#CCosto').val();
    if (values == ""){$('.autoCCosto').show(); }
  });

  $( document).on( "keydown", "#CCosto", function() {$('.autoCCosto').hide(); });
  $( ".autoCCosto" ).on( "listviewbeforefilter", function ( e, data ) {$('.autoCCosto').show();})
  $('.autoCCosto').hide(); 
}

//**************** Centro de costos ****************************************//



//**************** RESPONSABLES ****************************************//
function cargarResponsables() {
    $("#Responsable li").remove();
    var parametro = localStorage.compania;
    $.ajax({
        type       : 'GET',
        url        : uri + '/responsable/' + parametro,
        crossDomain: true,
        beforeSend : function() {$.mobile.loading('show')},
        complete   : function() {$.mobile.loading('hide')},
        dataType   : 'json',
        success    : function(response) {
                      $("#Responsable").listview();
                      $.each(response, function (key, item) {
                        $("#Responsable").append(' <li>'+ item.IdeRV + ' - ' + item.NomRV +'</li>');
                      });
                      $("#Responsable").listview('refresh');
                    },
        error      : function(xhr, ajaxOptions, thrownError) {}
    });

    $( document).on( "click", ".autocomplete li", function() {      
        var selectedItem = $(this).html();
        $(this).parent().parent().find('input').val(selectedItem);   
        $('.autocomplete').hide();     
    });

    $( document).on( "focus", "#filterable-input", function() {      
        var values = $('#filterable-input').val();
        if (values == ""){ $('.autocomplete').show(); }
    });

    $( document).on( "keydown", "#filterable-input", function() { $('.autocomplete').hide(); });
    $( ".autocomplete" ).on( "listviewbeforefilter", function ( e, data ) {$('.autocomplete').show();})
    $('.autocomplete').hide(); 
}

function validarResponsable() {
  var val = $('#filterable-input').val();
  var x = false;
  if (val != ""){
      $(".autocomplete li").each(function (index) {
          var selectedItem = $(this).html();
          if(val == selectedItem){x = true;}
      });
  }else{ x = true;}
  if(x == false){alert('Debe escoger un responsable v\u00e1lido de la lista');}
      return x;
}
//**************** RESPONSABLES ****************************************//

function cargarRes() {
  $("#Res li").remove();
  var parametro = localStorage.compania;
  $.ajax({
    type       : 'GET',
    url        : uri + '/responsable/' + parametro,
    crossDomain: true,
    beforeSend : function() {$.mobile.loading('show')},
    complete   : function() {$.mobile.loading('hide')},
    dataType   : 'json',
    success    : function(response) {
                  $("#Responsable").listview();
                  $.each(response, function (key, item) {
                    $("#Res").append(' <li>'+ item.IdeRV + ' - ' + item.NomRV +'</li>');
                  });
                  $("#Res").listview('refresh');
                },
    error      : function(xhr, ajaxOptions, thrownError) {}
  });

  $( document).on( "click", ".autocompleteRes li", function() {      
    var selectedItem = $(this).html();
    $(this).parent().parent().find('input').val(selectedItem);   
    $('.autocompleteRes').hide();     
  });

  $( document).on( "focus", "#rsp", function() {      
    var values = $('#rsp').val();
    if (values == ""){$('.autocompleteRes').show();}
  });

  $( document).on( "keydown", "#rsp", function() { $('.autocompleteRes').hide(); });
  $( ".autocompleteRes" ).on( "listviewbeforefilter", function ( e, data ) {$('.autocompleteRes').show();})
  $('.autocompleteRes').hide(); 
}

    
//**************** RESPONSABLES ****************************************//

//**************** ESTADOS ****************************************//
function cargarEstados() {
  var parametro = localStorage.compania;
  $.ajax({
    type       : 'GET',
    url        : uri + '/estado/' + parametro,
    crossDomain: true,
    beforeSend : function() {$.mobile.loading('show')},
    complete   : function() {$.mobile.loading('hide')},
    dataType   : 'json',
    success    : function(response) {
                  $.each(response, function (key, item) {
                    $('<option>', { text: item.NomES, value: item.ES}).appendTo($('#nEstado'));
                  });
                  $('#nEstado').selectmenu("refresh", true);
                },
    error      : function(xhr, ajaxOptions, thrownError) {
                  $('<option>', { text: 'no se encuentra ningun estado', value: '0' }).appendTo($('#nEstado'));
                  $('#nEstado').selectmenu("refresh", true);
                }
  });
}
//**************** ESTADOS ****************************************//


/***************************************** BUSQUEDA ***********************************************/

function BuscarEquipo(opcion, tipofiltrado) {
  checkConnection();
  $('#tblDetalleEquipo li').remove(); 
  var par = $('#parametro').val();
  var valor = $('#codigo').val();

  if(opcion == 0){
    if(par==6){valor = $('#filterable-input').val();}
    if(par==9){valor = $('#UF').val();}
    if(par==8){valor = $('#CC').val();}
  }

  if(opcion == 1 && valor == ''){
    alert('Debe llenar el campo valor');
  }else{
    var ajax_data = {'codigo': valor, 'parametro': par, 'compania': localStorage.compania, 'filtrado': tipofiltrado };
      $.ajax({
        type       : 'GET',
        url        : uri + '/equipos',
        crossDomain: true,
        beforeSend : function() {$.mobile.loading('show')},
        complete   : function() {$.mobile.loading('hide')},
        data       : ajax_data,
        dataType   : 'json',
        success    : function(response) {
                      $('#total').html("Total: " + response.length);
                      if(response.length == 0){alert('No se encontraron equipos');}
                      else{
                        if (response.length == 1 ){
                            $.each(response, function (key, item) {
                              document.location.href = 'DetalleActivo.html?cod=' + item.eq;
                          });
                        }else{
                          $.each(response, function (key, item) {
                              var colorEstado = "";
                              if(item.estado.substring(0,1) == 'A'){colorEstado = "green";}
                              else{colorEstado = "red";}
                                 
                              $('#tblDetalleEquipo').append(
                              '<li>'
                                + '<a href="DetalleActivo.html?cod='+ item.eq +'" data-ajax="false" data-rel="external">'
                                + '<div class="div-color-'+ colorEstado +'">&nbsp;</div>' 
                                + '<h2>' + item.codigo + ' | ' + item.activofijo + '</h2>'
                                + '<p> <strong>' + item.descripcion  +'</strong></p>'
                                + '<p> <strong>' + item.ccosto   +' | ' + item.ubicacionFisica + '</strong></p>'
                                + '<p> <strong>' + item.estado + '</strong></p>'
                                + '</a>'
                              + '</li>');
                          });
                            $('#tblDetalleEquipo').listview('refresh');
                        }
                      }
                      if(opcion==1){
                        $("#codigo").val('');
                        $("#codigo").focus();
                      }
                    },
        error      : function(xhr, ajaxOptions, thrownError) {alert(thrownError);}
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
    if(par==6){valor = $('#rsp').val();}
    if(par==9){valor = $('#UFisica').val();}
    if(par==8){valor = $('#CCosto').val();}

    var ajax_data = {'codigo': valor, 'parametro': par, 'compania': localStorage.compania, 'filtrado': tipofiltrado};
    $.ajax({
      type       : 'GET',
      url        : uri + '/equipos',
      crossDomain: true,
      beforeSend : function() {$.mobile.loading('show')},
      complete   : function() {$.mobile.loading('hide')},
      data       : ajax_data,
      dataType   : 'json',
      success    : function(response) {
                    $('#total').html("Total: " + response.length);
                    if(response.length == 0){alert('No se encontraron equipos');
                    }else{
                      var i = 0;
                      var newRows = '';
                      $.each(response, function (key, item) {
                          

                          newRows = newRows +'<li>'
                              + '<a href="#" style="padding-top: 0px;padding-bottom: 0px;padding-right: 42px;padding-left: 0px;">'
                              + '<label style="border-top-width: 0px;margin-top: 0px;border-bottom-width: 0px;margin-bottom: 0px;border-left-width: 0px;border-right-width: 0px;" data-corners="false">'
                              + '<input type="checkbox" id="chk'+ i+ '"></input>' 
                              + '<input type="hidden" id="eq'+i+'" value="' + item.eq + '"></td>'  
                              + '<label for="chk'+i+'">'
                              + '<h2>' + item.codigo + ' | ' + item.activofijo + '</h2>'
                              + '<p> <strong>' + item.descripcion  +'</strong></p>'
                              + '<p> <strong>' + item.ccosto   +' | ' + item.ubicacionFisica + '</strong></p>'
                              + '<p> <strong>' + item.responsable + '</strong></p>'
                              + '<p> <strong>' + item.estado + '</strong></p>'
                              + '</label>'
                              + '</label>'
                              + '</a>'
                            + '</li>';
                          
                          i++;

                      });
                      $("#chkGeneral").prop("checked",false);
                      $("#chkGeneral").checkboxradio("refresh")
                      
                      $('#tblDetalleEquipo').listview().append( newRows).listview("refresh").trigger("create");

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
                    }
                  },
      error      : function(xhr, ajaxOptions, thrownError) {alert(thrownError);}
  });
}
/***************************************** BUSQUEDA ***********************************************/

function seleccionarTodo(){      
  var x = $('#chkGeneral').prop("checked");
  $('#tblDetalleEquipo li').each(function () {
    //$(this).find('td').each(function () {
      var clase = $(this).attr('class');
      if (clase != "ui-screen-hidden"){
          var chk = $(this).find('input[type="checkbox"]');
          if(x){
            chk.prop("checked",true).checkboxradio('refresh');
          }else{chk.prop("checked",false).checkboxradio('refresh');}
      }
      
    //})
  })
}