function closeSearch() {
    var $form = $('.navbar-collapse form[role="search"].active')
	$form.find('input').val('');
	$form.removeClass('active');
}

var slideIndex = 1;
showSlides(slideIndex);

function getSlides(n) {
	showSlides(slideIndex += n);
}

function showSlides(n) {
	var i;
	var x = document.getElementsByClassName("content-slides");
	if (n > x.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = x.length
	}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	x[slideIndex-1].style.display = "block";  
}

(function() {
	"use strict";

	var box_menu = $("#btn_menu");

	$('.navbar-collapse form[role="search"] button[type="reset"]').on('click keyup', function(event) {
		console.log(event.currentTarget);
		if (event.which == 27 && $('.navbar-collapse form[role="search"]').hasClass('active') ||
			$(event.currentTarget).attr('type') == 'reset') {
			closeSearch();
		}
	});

	$('.navbar-collapse form[role="search"]:not(.active) button[type="submit"]').on('click', function(event) {
		event.preventDefault();
		var $form = $(this).closest('form'),
			$input = $form.find('input');
		$form.addClass('active');
		$input.focus();

	});

	$('navbar-collapse form[role="search"].active button[type="submit"]').on('click', function(event) {
		event.preventDefault();
		var $form = $(this).closest('form'),
			$input = $form.find('input');
		$('#showSearchTerm').text($input.val());
        closeSearch()
	});
	
})();