(function() {
	const button = document.querySelector('#cta-btn');

	// Make button bigger on mouseover
	button.addEventListener('mouseover', function() {
		button.classList.add('mouseOver');

		// Remove class on mouseleave
		button.addEventListener('mouseleave', function() {
			button.classList.remove('mouseOver');
		});
	});
})();