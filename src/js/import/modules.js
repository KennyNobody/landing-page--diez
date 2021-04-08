import $ from 'jquery';
import fancybox from '@fancyapps/fancybox';
import "%modules%/header/header";
import "%modules%/footer/footer";
import "%modules%/menu-link/menu-link";
import "%modules%/menu/menu";
import "./agreement";

console.log(fancybox);

(function() {
	$('[data-fancybox]').fancybox({
		infobar: false,
		locked: true
	})
})();