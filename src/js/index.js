import "./import/modules";

document.addEventListener( 'wpcf7mailsent', function( event ) {
	let form = document.querySelector('.form');

	if (form) {
		form.classList.add('form--sending');

		setTimeout(function() {
			form.classList.remove('form--sending');
		}, 5000);
	}
}, false );