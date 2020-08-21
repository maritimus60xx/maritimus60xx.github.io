/**
 *  Show and hide menu when hover panel-body.
 */

document.addEventListener('mouseover', function (event) {

	if (event.target.closest('#panel-body') && window.innerWidth > 1300) {
		document.querySelector('.panel__body').classList.add('panel-active');
	}

	if (event.target.closest('.content') && window.innerWidth > 1300) {
		document.querySelector('.panel__body').classList.remove('panel-active');
		document.querySelectorAll('.nav__link').forEach(function (item) {
			item.classList.remove('open-sub-list');
		});
	}

}, false);


document.addEventListener('click', function (event) {

	// burger implement.
	if (event.target.closest('.burger')) {
		let burger = event.target.closest('.burger');
		if (burger.classList.contains('active-burger')) {
			burger.classList.remove('active-burger');
			document.querySelector('.panel__body').classList.remove('burger-open');
		} else {
			burger.classList.add('active-burger');
			document.querySelector('.panel__body').classList.add('panel-active');
			document.querySelector('.panel__body').classList.add('burger-open');
		}
	}

	// close panel when click content-chapter.
	if (event.target.closest('.content') && !event.target.closest('.burger')) {
		document.querySelector('.burger').classList.remove('active-burger');
		document.querySelector('.panel__body').classList.remove('burger-open');
	}

	if (event.target.closest('.nav__link')) {
		let navLink = event.target.closest('.nav__link');
		let mainPanel = navLink.closest('#panel-body');

		if (mainPanel.classList.contains('panel-active')) {

			if (navLink.classList.contains('open-sub-list')) {
				navLink.classList.remove('open-sub-list');
			} else {
				document.querySelectorAll('.nav__link').forEach(function (item) {
					item.classList.remove('open-sub-list');
				});
				navLink.classList.add('open-sub-list');
			}
		}
	}

	if (event.target.closest('.s-link')) {
		let subLink = event.target.closest('.s-link');

		document.querySelectorAll('.s-link').forEach(function (link) {
			link.classList.remove('s-link--active');
		});
		subLink.classList.add('s-link--active');
	}
});

// Add active class for current menu-link when located in the page of the link.
// Example: addActiveClassToLink('.info-link');

function addActiveClassToLink(linkClass) {
	document.querySelectorAll('.nav__link').forEach(function (link) {
		link.classList.remove('active-link');
	});
	document.querySelector(linkClass).classList.add('active-link');
}




