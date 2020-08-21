$(document).ready(function () {

	/**
	 *  Modal JS implement.
	 */

	// Run select.
	function runSelect() {
		$('.select').selectpicker();
	}
	runSelect();

	// Modal exit.
	$(document).on('click', '.modal__exit', function () {
		$('.main-modal').fadeOut();
	});

	// Key Press.
	$(document).keydown(function (event) {
		if (event.keyCode === 27) {
			$('.main-modal').fadeOut();
		};
	});

	// Modal Edit.
	$(document).on('click', '.action-edit', function () {
		runSelect();
		$('.modal-edit').fadeIn();
	});

	// Modal Edit Class.
	// $(document).on('click', '.edit-option', function () {
	// 	runSelect();
	// 	let title = $(this)[0].dataset.title;
	// 	console.log(title);
	// 	$('.select').val(title);
	// 	$('.select').selectpicker('refresh');
	// 	$('.m-edit-class').fadeIn();
	// });

	// Modal Add.
	$(document).on('click', '.add, .action-lock', function () {
		runSelect();
		$('.modal-add').fadeIn();
	});

	// Modal Delete.
	$(document).on('click', '.action-delete, .clean-all', function () {
		$('.modal-delete').fadeIn();
	});

	// Modal Choice.
	$(document).on('click', '.reset-btn', function () {
		$('.modal-reset').fadeIn();
	});

	// Modal Message.
	$(document).on('click', '.vision-action', function () {
		$('.modal-message').fadeIn();
	});

	// Modal Ins. modal-ins
	$(document).on('click', '.action-ins', function () {
		$('.modal-ins').fadeIn();
	});

	// Modal Add SubLeague.
	$(document).on('click', '.action-sub', function () {
		$('.add-sub').fadeIn();
	});

	// Modal Edit SubLeague.
	$(document).on('click', '.action-edit-sub', function () {
		$('.edit-sub').fadeIn();
	});

	// Close modal when click "no-btn".
	$(document).on('click', '.no', function () {
		$('.main-modal').fadeOut();
	});


	// Close modal when click on body.
	$(document).on('click', "body", function (event) {
		if (!$(event.target).closest('.action-sub, .action-edit-sub, .action-lock, .action-ins, .vision-action, .clean-all, .reset-btn, .no, .action-delete, .add, .action-edit, .modal__exit, .modal__content').length) {
			$("body").find($('.main-modal')).fadeOut();
		}
	});
});

/**
 * Close any popup.
 */

function closeAnyPopap() {
	$('.main-modal').fadeOut();
}

/**
 * Show success-modal.
 */
function showSuccessModal() {
	$('.modal-success').fadeOut();
}

