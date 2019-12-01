function loadTours(tours) {
	const allTours = document.querySelector('#allTours'),
		popularTours = document.querySelector('#popularTours');

	if (allTours) {
		for (let i = 0; i < tours.length; i++) {
			listAllTours(allTours, tours[i]);
		}
	} else if (popularTours) {
		for (let i = 0; i < tours.length; i++) {
			if (tours[i].popular) {
				listAllTours(popularTours, tours[i]);
			}
			
		}
	}
}
// Display all tours
function listAllTours(parent, tour) {
	const tourContainer = document.createElement('div'),
		tourHeader = document.createElement('div'),
		shortText = document.createElement('div');

	tourContainer.className = "tour-container";
	tourHeader.className = "tour-header";
	shortText.className = "short-description";

	tourHeader.innerHTML = `
		<a href="tours.html"><img src="${tour.imageUrl}" alt="${tour.name}">
		<h2 id="${tour.id}" class="tour-title">${tour.name}</h2>
		<p>${tour.shortdescription}</p></a>
	`;

	tourContainer.appendChild(tourHeader);
	parent.appendChild(tourContainer);

}

// Get tour data from JSON
(function() {
	 fetch('http://kallevikstyle.no/portfolio1/re-cycle/json/tours.json')
	 .then(result => result.json())
	 .then((tours) => {
	 	 showAllProducts(tours);
	  })
	  .catch(err => console.log(err));

})();