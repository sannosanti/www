 function cargarPanel(){
      $('#mypanel').append('<div class="ui-panel-inner" />');
      $('div.ui-panel-inner').append('<ul/>');
      $('div.ui-panel-inner ul').append(
            '<li data-role ="list-divider" class="paneldivider">Activos</li>' 
            +'<li data-icon="false"><a href="Activos/menuGenActivo.html" data-ajax="false">Activos</a></li>'
            +'<li data-role ="list-divider" class="paneldivider">Solicitudes de Servicio</li>'
            +'<li data-icon="false"><a href="SS/ConsultaSS.html" data-ajax="false">Consulta de SS</a></li>'
            +'<li data-role ="list-divider" class="paneldivider">Ordenes de Trabajo</li>'
            +'<li data-icon="false"><a href="OT/consultaOT.html" data-ajax="false">Consuta de OT</a></li>'
            +'<li data-role ="list-divider" class="paneldivider">Paros</li>'
            +'<li data-icon="false"><a href="paro/consultaPA.html" data-ajax="false">Consulta de Paros</a></li>'
            +'<li data-role ="list-divider" class="paneldivider">Almacen y Repuestos</li>'
            +'<li data-icon="false"><a href="Repuestos/MenuRP.html" data-ajax="false">Repuestos</a></li>'
            
	);
}


 function cargarPanelsimple(){
      $('#mypanel').append('<div class="ui-panel-inner" />');
      $('div.ui-panel-inner').append('<ul/>');
      $('div.ui-panel-inner ul').append(
            '<li data-role ="list-divider" class="paneldivider">Activos</li>' 
            +'<li data-icon="false"><a href="../Activos/menuGenActivo.html" data-ajax="false">Activos</a></li>'
            +'<li data-role ="list-divider" class="paneldivider">Solicitudes de Servicio</li>'
            +'<li data-icon="false"><a href="../SS/ConsultaSS.html" data-ajax="false">Consulta de SS</a></li>'
            +'<li data-role ="list-divider" class="paneldivider">Ordenes de Trabajo</li>'
            +'<li data-icon="false"><a href="../OT/consultaOT.html" data-ajax="false">Consulta de OT</a></li>'
            +'<li data-role ="list-divider" class="paneldivider">Paros</li>'
            +'<li data-icon="false"><a href="../paro/consultaPA.html" data-ajax="false">Consulta de Paros</a></li>'
            +'<li data-role ="list-divider" class="paneldivider">Almacen y Repuestos</li>'
            +'<li data-icon="false"><a href="../Repuestos/MenuRP.html" data-ajax="false">Repuestos</a></li>'
      );
}