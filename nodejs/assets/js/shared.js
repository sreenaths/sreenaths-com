/*
	Shared scripts : sreenaths.com
*/

/* --- Animators --- */

function fadeOutIn( fadeOutSelector, fadeInSelector ){
	$(fadeOutSelector).fadeOut({complete:function(){
		$(fadeInSelector).fadeIn();
	}});
}

function scrollTop(){
	$('html, body').animate({ scrollTop: 0 }, 'slow');
}

/* --- Element Access --- */
function _( elementId ){
	return document.getElementById( elementId );
}

/* --- Sticky --- */
function sticky( elementSelector ){

	$(document).ready(function () {

		var element = $(elementSelector);
		var parent = element.parent();
		var doc = $(document);

		var stuck = false; // Maybe better perf

		function onWindowScroll( event ){
			if( doc.scrollTop()>=parent.offset().top ){
				if(!stuck) stuck = true, element.addClass("stuck"), parent.css("height", element.css("height") );
			}
			else if( stuck ) stuck=false, element.removeClass("stuck"), parent.css("height", element.css("height") );
		}

		$(window).scroll( onWindowScroll );

	});

}
