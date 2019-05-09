$(document).ready(function(){
	var $form = $(".header__form");
	var $ctaBtn = $(".cta__btn");
	var $offset = $form.offset();
	var $focusInput = $('#first__input');
	
	$ctaBtn.click(function(e) {
		$('html, body').animate({scrollTop: $offset.top }, 1200);
		$focusInput.focus();

	});

});