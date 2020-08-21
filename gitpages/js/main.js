document.addEventListener('click', function (event) {

	/**
	 * Admin action implement.
	 */

	if (event.target.closest('.admin-action')) {
		document.querySelector('.admin-action').classList.toggle('a-action-active');
	} else {
		document.querySelector('.admin-action').classList.remove('a-action-active');
	}

	/**
	 * Tabs for statistic-page.
	 */

	if (event.target.closest('.open-sub')) {
		let tabSub = event.target.closest('.open-sub');
		if (!tabSub.classList.contains('sub-active')) {
			// document.querySelectorAll('.sub-item').forEach(function (item) {
			// 	item.classList.remove('sub-item-active');
			// });
			// document.querySelectorAll('.open-sub').forEach(function (item) {
			// 	item.classList.remove('sub-active');
			// });
			tabSub.classList.add('sub-active');
			tabSub.closest('.list__item').querySelectorAll('.sub-item').forEach(function (item) {
				item.classList.add('sub-item-active');
			});
		} else {
			tabSub.closest('.list__item').querySelectorAll('.sub-item').forEach(function (item) {
				item.classList.remove('sub-item-active');
			});
			tabSub.classList.remove('sub-active');

		}
	}

	/**
	 * Watch news content.
	 */

	if (event.target.closest('.watch-news')) {
		let watchNewsBtn = event.target.closest('.watch-news');
		if (watchNewsBtn.classList.contains('watch-news--active')) {
			watchNewsBtn.classList.remove('watch-news--active');
			watchNewsBtn.parentElement.querySelector('.news-max').classList.remove('news-max--active');
		} else {
			document.querySelectorAll('.news-max').forEach(function (item) {
				if (item.classList.contains('news-max--active')) {
					item.classList.remove('news-max--active');
				}
			});
			document.querySelectorAll('.watch-news').forEach(function (item) {
				if (item.classList.contains('watch-news--active')) {
					item.classList.remove('watch-news--active');
				}
			});
			watchNewsBtn.classList.add('watch-news--active');
			watchNewsBtn.parentElement.querySelector('.news-max').classList.add('news-max--active');
		}
	}

	/**
	 * Tabs for statistic-page.
	 */

	if (event.target.closest('.top__item')) {
		let tabItem = event.target.closest('.top__item');
		if (!tabItem.classList.contains('t-item--active')) {
			document.querySelectorAll('.top__item').forEach(function (item) {
				item.classList.remove('t-item--active');
			});
			tabItem.classList.add('t-item--active');
		}
	}


});


/**
 * Scrollbar implement.
 */

function startPerfectScroll() {
	if (document.querySelector('.intro__scroll')) {
		const list = document.querySelector('.intro__scroll');
		new PerfectScrollbar(list);
	}

	if (document.querySelector('.roles__list')) {
		const roles = document.querySelector('.roles__list');
		new PerfectScrollbar(roles);
	}

	if (document.querySelector('.page')) {
		const page = document.querySelector('.page');
		new PerfectScrollbar(page);
	}
}
startPerfectScroll();