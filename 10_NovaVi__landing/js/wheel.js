$(document).ready(function () {

	function wheelLife() {
		$('.select-body').selectpicker();
		$('.wheel-finance').fadeIn(500);
	};

	$(document).on('click', '.wheel__btn', function () {
		wheelLife();
	});






});