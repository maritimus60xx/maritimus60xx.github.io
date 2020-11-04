$(document).ready(function () {

	$(document).on('click', '.notifications', function () {
		if ($(window).width() > 400) {
			$('.notifications__list').toggleClass('notifications__list--active');
			$('.notifications__list-arrow').toggleClass('notifications__list-arrow--active');
			$('.language__other').removeClass('language__other--active');
			$('.exit').removeClass('exit--active');
		}
	})

	$(document).on('click', '.language', function () {
		$('.language__other').toggleClass('language__other--active');
		$('.notifications__list-arrow').removeClass('notifications__list-arrow--active');
		$('.notifications__list').removeClass('notifications__list--active');
		$('.exit').removeClass('exit--active');
	});

	$(document).on('click', '.open-exit', function () {
		$('.exit').toggleClass('exit--active');
		$('.notifications__list-arrow').removeClass('notifications__list-arrow--active');
		$('.notifications__list').removeClass('notifications__list--active');
		$('.language__other').removeClass('language__other--active');
	});

	// Close modal windows.
	$(document).on('click', "body", function (event) {
		if (!$(event.target).closest(".language , .open-exit, .notifications").length) {
			$('.notifications__list-arrow').removeClass('notifications__list-arrow--active');
			$("body").find($('.notifications__list')).removeClass('notifications__list--active');
			$("body").find($('.language__other')).removeClass('language__other--active');
			$("body").find($('.exit')).removeClass('exit--active');
		}
	});


	/**
	 * Header__burger implement.
	 */

	$(document).on('click', '.header__burger', function () {
		$('.main-panel').toggleClass('main-panel--active');
	});

});