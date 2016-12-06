$(document).ready(function () {
	// Highlight the top nav as scrolling
	$('body').scrollspy({
		target: '.navbar-fixed-top',
		offset: 80
	})

	$(document).on('click', 'a.page-scroll', function(event) {
    event.preventDefault();
    var link = $(this);
    $('html, body').stop().animate({
			scrollTop: $(link.attr('href')).offset().top - 70
		}, 500);
	});
	new WOW().init();
});