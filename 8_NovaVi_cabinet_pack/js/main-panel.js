$(document).ready(function () {

	/**
	 * Panel links implement.
	 */

	//  Add active class.
	$(document).on('click', '.panel-nav__link', function () {
		// event.preventDefault();

		// alert($(this).hasClass('panel-nav__link--active'));
		if ($(this).hasClass('panel-nav__link--active')) {
			$(this).removeClass('panel-nav__link--active');
		} else {
			$('.panel-nav__link').removeClass('panel-nav__link--active');
			$(this).addClass('panel-nav__link--active');
		}

	});

	$(document).on('click', '.panel-nav__link--structure', function (event) {
		event.preventDefault();

		$('.nav-down__list').toggleClass('nav-down__list--active ');
	});


});