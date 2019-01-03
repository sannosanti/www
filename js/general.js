/***************************************** GENERALES ***********************************************/
function $_GET(name){
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp ( regexS );
  var tmpURL = window.location.href;
  var results = regex.exec( tmpURL );
  if( results == null )
    return"";
  else
    return results[1];
}


//function $_GET(param){
 // url = document.URL;
 // url = String(url.match(/\?+.+/));
 // url = url.replace("?", "");
 // url = url.split("&");
 // x = 0;
 // while (x < url.length){
 //   p = url[x].split("=");
 //   if (p[0] == param)  {
 //     return decodeURIComponent(p[1]);
 //   }
 //   x++;
 // }
//}
/***************************************** GENERALES ***********************************************/

