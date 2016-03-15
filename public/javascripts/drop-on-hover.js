$(document).ready(function(){

	//Dropdownb on hover event
	$(".dropdown, .btn-group").hover(function(){
		var dropdownMenu = $(this).children(".dropdown-menu");
		if(dropdownMenu.is(":visible")){
			dropdownMenu.parent().toggleClass("open");
		}
	});

	//Disable Dropdown on hover in XS Resolution}
	if($(window).width()>768){
		$(".drop-fix").click(function() {
			var item = $(this);
			var url = item.data('url');
			window.location.href='/'+ url;
		});
	}

	//Show promocodes input
	$( '.promocode-t' ).click(function() {
		$( '.promocode-i' ).toggle(400, 'swing');
	});

	// Fix tooltip issues
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip({container:'body'});
	});
});
