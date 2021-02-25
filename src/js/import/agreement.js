document.addEventListener('DOMContentLoaded', function() {
	const radio = document.querySelectorAll('.radio');

	for (let i = 0; i < radio.length; i++) {
		toggleDisabled(radio[i], radio[i].checked);

		radio[i].addEventListener('change', function() {
			toggleDisabled(this, this.checked);
		});
	}

	function toggleDisabled (item, state) {
		let text = item.getAttribute('data-for');
		let button = document.querySelector('#' + text);
		
		if (button && state) {
			button.classList.remove("disabled");
		} else if (button && state == false) {
			button.classList.add("disabled");
		} else {
			return false;
		}
	}
});