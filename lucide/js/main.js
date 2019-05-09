$(document).ready(function(){
		
		// burger-menu starts

	var menuLink = $('.burger__menu');
	var linkActive = $('.burger__menu--active');
	var menu = $('.menu__responsive');
	var navLink = $('.link__responsive')


	menuLink.on('click', function() {
		menuLink.toggleClass('burger__menu--active');
		menu.toggleClass('menu__responsive--active');
	});
	navLink.on('click', function() {
		menuLink.removeClass('burger__menu--active');
		menu.removeClass('menu__responsive--active');
	});

	// burger-menu ends

});