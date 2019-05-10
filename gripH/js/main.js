$(document).ready(function(){

	var modal = $('.modal');
	var button = $('.intro__btn--link');
	var buttonSecond = $('.team__btn--link');
	var close = $('.modal__close');
	var $btnDown = $('.header__down');


	button.on('click', function (event) {
		event.preventDefault();
		$(modal).fadeIn("normal");
	});

	buttonSecond.on('click', function (event) {
		event.preventDefault();
		$(modal).fadeIn("normal");
	});

	close.on('click', function () {
		$(modal).fadeOut("normal");
	});

	$(document).keydown(function(event){
  		if (event.keyCode === 27) { 
    	$(modal).fadeOut("normal");
 		};
	});

	$("body").on('click', function (event) {
		if(!$(event.target).closest(".modal__block, .modal__content, .intro__btn--link, .team__btn--link").length) {
			$("body").find(modal).fadeOut("normal");
		}
	});


	$btnDown.on('click', function (event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 560}, 1000);
	});
	var $btnNavigation = $('.navigation');

	$(window).on('scroll', function() {
		if ($(window).scrollTop() >= 530 && $(window).width() > 1126) {
			$btnNavigation.fadeIn();
		} else {
			$btnNavigation.fadeOut();
		}
	});
	var $scrollYellow = $('.navigation--yellow');
	var $scrollBlue = $('.navigation--blue');
	var $scrollPink = $('.navigation--pink');
	var $scrollGrey = $('.navigation--grey');
	var $lines = $('.intro__element--second');
	var $quality = $('.quality');
	var $team = $('.team');
	var $contact = $('.contact');
	var $offsetLines = $lines.offset();
	var $offsetQuality = $quality.offset();
	var $offsetTeam = $team.offset();
	var $offsetContact = $contact.offset();

	$(window).on('scroll', function() {
		if ($(window).scrollTop() >= $offsetLines.top && $(window).scrollTop() < $offsetLines.top + 300) {
			$scrollYellow.addClass('wheel');
		} else {
			$scrollYellow.removeClass('wheel');
		}
	});

	$(window).on('scroll', function() {
		if ($(window).scrollTop() >= $offsetLines.top + 300 && $(window).scrollTop() < $offsetQuality.top + 400) {
			$scrollBlue.addClass('wheel');
		} else {
			$scrollBlue.removeClass('wheel');
		}
	});

	$(window).on('scroll', function() {
		if ($(window).scrollTop() >= $offsetQuality.top + 400 && $(window).scrollTop() < $offsetTeam.top + 100) {
			$scrollPink.addClass('wheel');
		} else {
			$scrollPink.removeClass('wheel');
		}
	});

	$(window).on('scroll', function() {
		if ($(window).scrollTop() >= $offsetTeam.top + 100) {
			$scrollGrey.addClass('wheel');
		} else {
			$scrollGrey.removeClass('wheel');
		}
	});

	$scrollYellow.on('click', function () {
		$('html, body').animate({scrollTop: $offsetLines.top}, 1200);
	});

	$scrollBlue.on('click', function () {
		$('html, body').animate({scrollTop: $offsetQuality.top}, 1200);
	});

	$scrollPink.on('click', function () {
		$('html, body').animate({scrollTop: $offsetTeam.top - 200}, 1200);
	});

	$scrollGrey.on('click', function () {
		$('html, body').animate({scrollTop: $(document).height()}, 1200);
	});
});