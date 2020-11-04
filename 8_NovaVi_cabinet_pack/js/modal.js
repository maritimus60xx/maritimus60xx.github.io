$(document).ready(function () {

	/**
	 *  Modal JS implement.
	 */

	// Modal exit.
	$(document).on('click', '.modal__exit', function () {
		$('.modal').fadeOut(200);
	});

	// Key Press.
	$(document).keydown(function (event) {
		if (event.keyCode === 27) {
			$('.modal').fadeOut(200);
		};
	});




	// Modal Success.

	$(document).on('click', '.ref-copy__copy', function () {
		$('.modal__success').fadeIn(200);
		function closeSucces() {
			$('.modal__success').fadeOut(200);
		}
		setTimeout(closeSucces, 2000);
	});

	// Modal Mentor.
	$(document).on('click', '.profile-user__mentor', function () {
		$('.modal__mentor').fadeIn(200);
	});

	// Modal Messages.
	$(document).on('click', '.notifications', function () {
		if ($(window).width() <= 400) {
			$('.modal__messages').fadeIn(200);
		}
	});




	// Close modal when click on body.
	$(document).on('click', "body", function (event) {
		if (!$(event.target).closest('.ref-copy__copy, .profile-user__mentor, .notifications').length) {
			$("body").find($('.modal')).fadeOut(200);
		}
	});


	/**
	 * Show modal notice functions implement.
	 */



});