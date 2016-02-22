$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  console.log("tooltip enabled");
});
$(function(){
    var path = window.location.pathname;
    if (path === "/contacto") {
      console.log("dale que va");
    }
});
//blueimp.Gallery(
//    document.getElementById('links').getElementsByTagName('a'),
//    {
//        container: '#blueimp-gallery-carousel',
//        carousel: true
//    }
//);
