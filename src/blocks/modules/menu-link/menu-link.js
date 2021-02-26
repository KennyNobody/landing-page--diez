document.addEventListener('DOMContentLoaded', () => {
	const button = document.querySelector('.menu-link');
	const overlay = document.querySelector('.menu__overlay');
	const body = document.querySelector('.body');

	if (button) {
		button.addEventListener('click', function(e) {
			e.preventDefault();
			body.classList.toggle('body--menu-opened');
		});
	}

	if (overlay) {
		overlay.addEventListener('click', function() {
			body.classList.remove('body--menu-opened');
		});
	}
});
