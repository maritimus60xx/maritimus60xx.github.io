$(document).ready(function () {

	$(document).on('click', '.show-content', function () {
		$('.show-content').toggleClass('show-content--active');
		$('.row-hidden').toggleClass('row-hidden--active');

	});
	function responciveWidth() {
		let widthEvents = $('.events').outerWidth();
		$('.profile').attr('style', 'width:' + widthEvents + 'px !important');
	}

	// responciveWidth();


	// $(window).resize(function () {
	// 	let widthEvents = $('.events').outerWidth();

	// 	$('.profile').attr('style', 'width:' + widthEvents + 'px !important');

	// });





});