$(document).ready(function () {

	/**
	 * Header burger implement.
	 */

	$(document).on('click', '.burger', function () {
		$('.burger').toggleClass('burger-active');
		$('.menu').toggleClass('menu-active');
		$('.header__logo').toggleClass('logo-hidden');
		$('.exit').toggleClass('hidden-exit');
		$('body').css('overflow', 'hidden');
		if (!($('.burger').hasClass('burger-active'))) {
			$('body').css('overflow', 'auto');
		}
	});

	$(document).on('click', '.nav__link', function () {
		$('body').css('overflow', 'auto');
	});

	/**
	 * Header btn-down and menu-scroll-to-section implement.
	 */

	$(document).on('click', '.down__scroll', function () {
		let valueScroll = (($('.tools').offset()).top);
		$('html, body').animate({ scrollTop: valueScroll }, 800);
	});


	/**
	 * Header video btn implement.
	 */

	var customStopVideo = () => {
		var iframe = document.querySelectorAll('iframe');
		Array.prototype.forEach.call(iframe, iframe => {
			iframe.contentWindow.postMessage(JSON.stringify({
				event: 'command',
				func: 'stopVideo'
			}), '*');
		});
	};

	var customRunVideo = () => {
		var iframe = document.querySelectorAll('iframe');
		Array.prototype.forEach.call(iframe, iframe => {
			iframe.contentWindow.postMessage(JSON.stringify({
				event: 'command',
				func: 'playVideo'
			}), '*');
		});
	};

	$(document).on('click', '.video__btn', function () {
		$('.video-modal').fadeIn();
		customRunVideo();
	});



	/**
	 * Language links implement.
	 */

	$(document).on('click', '.language__item', function () {
		$('.language__item').removeClass('language__item--active');
		$(this).addClass('language__item--active');
	});

	/**
	 * Free-Tour Form implement.
	 */

	$(document).on('click', '.registration-start', function () {
		$('.modal').fadeOut(100);
		$('.modal__registration').fadeIn();
	});

	// Key Press.
	$(document).keydown(function (event) {
		if (event.keyCode === 27) {
			$('.modal').fadeOut();
			customStopVideo();
		};
	});

	// Modal exit btn.

	$(document).on('click', '.modal__exit', function () {
		$('.modal').fadeOut();
		customStopVideo();
	});

	// close modal when click on body.
	$(document).on('click', "body", function (event) {
		if (!$(event.target).closest('.wheel-modal, .video__btn, .registration-start, .modal__body, .video__body, .modal__exit').length) {
			$("body").find($('.modal')).fadeOut('normal');
			customStopVideo();
		}
	});



	/**
	 * Parallax implement.
	 */

	function parallaXScene() {
		if (($(window).width() > 1000)) {
			var scene = document.getElementById('scene');
			var parallaxInstance = new Parallax(scene);
		};
	};

	parallaXScene();

	/**
	 * Slow video implement.
	 */
	function slowVideo() {
		let pl = document.getElementById("video");
		pl.playbackRate = 0.7;
		pl.play();
	};

	slowVideo();

	/**
	 * Animation for Tools.
	 */

	function scrollTools() {
		function tool1AddActiveClass() {
			$('#tool-1').addClass('tools-active');
		};
		function tool2AddActiveClass() {
			$('#tool-2').addClass('tools-active');
		};
		function tool3AddActiveClass() {
			$('#tool-3').addClass('tools-active');
		};
		setTimeout(tool1AddActiveClass, 0);
		setTimeout(tool2AddActiveClass, 200);
		setTimeout(tool3AddActiveClass, 400);
	};

	$(window).scroll(function () {

		if ($(this).width() <= 1920 && $(this).width() > 1000) {
			if ($(this).height() <= 1080) {
				if ($(this).scrollTop() > $(this).height() / 3) {
					scrollTools();
				}
			}
		}
	});

	/**
	 * Validation registration form.
	 */

	$(document).on('click', '.free-form-btn', function () {

		function cleanError() {
			$('.free-label').removeClass('error-label');
		}
		cleanError();

		// error id.
		function errorId() {
			$('#id-label').addClass('error-label');
		}

		// error email.
		function errorEmail() {
			$('#email-label').addClass('error-label');
		}
		// errorEmail();

		// error name.
		function errorName() {
			$('#name-label').addClass('error-label');
		}

		// check id field.
		let valueId = $('#free-id').val();

		function validateId(valueId) {

			if (valueId.length > 1) {
				return true;
			} else {
				errorId();
				return false;
			}
		};


		// check email field.
		let valueEmail = $('#free-email').val();

		function validateEmail(valueEmail) {
			const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if (!(re.test(String(valueEmail).toLowerCase()))) {
				errorEmail();
			}
			return re.test(String(valueEmail).toLowerCase());

		};

		// check name fiald.
		let valueName = $('#free-name').val();

		function validateName(valueName) {
			if (valueName.length > 0) {
				return true;
			} else {
				errorName();
				return false;
			}
		};

		// alert(validateName(valueEmail));



		if (validateId(valueId) && validateEmail(valueEmail) && validateName(valueName)) {
			$('.modal').fadeOut();
		} else {
			validateId(valueId);
			validateEmail(valueEmail);
			validateName(valueName);
		}



	});

});