$(document).ready(function(){
	$(".dropdown, .btn-group").hover(function(){
		var dropdownMenu = $(this).children(".dropdown-menu");
		if(dropdownMenu.is(":visible")){
			dropdownMenu.parent().toggleClass("open");
		}
	});
  $(".drop-fix").click(function() {
    var item = $(this);
    var url = item.data('url')
    window.location.href='/'+ url;
  });
});
 
