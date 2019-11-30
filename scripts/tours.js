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
		<a href="#"><img src="${tour.imageUrl}" alt="${tour.name}">
		<h2 id="${tour.id}" class="tour-title">${tour.name}</h2>
		<p>${tour.shortdescription}</p></a>
	`;

	tourContainer.appendChild(tourHeader);
	parent.appendChild(tourContainer);

}

// Get tour data from JSON
(function() {
	 //fetch('http://kallevikstyle.no/portfolio1/re-cycle/json/tours.json')
	 //.then(result => result.json())
	 //.then((tours) => {
	 	// showAllProducts(tours);
	 // })
	 // .catch(err => console.log(err));


// TEMPORARY-------------
	 var tours = [
  {
    "name": "Discover Haugesund",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "shortdescription": "See the most noteworthy places of Haugesund in just one hour",
    "imageUrl": "images/tour_discover-haugesund_580.jpg",
    "thumbnail": "images/tour_discover-haugesund_375.jpg",
    "id": "discover",
    "popular": true
  },
  {
    "name": "Hills &amp; Shore Tour",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "shortdescription": "Experience the rough shoreside and the nice view from the top of the hill",
    "imageUrl": "images/tour_hills_580.jpg",
    "thumbnail": "images/tour_hills_375.jpg",
    "id": "hills",
    "popular": true
  },
  {
    "name": "Architec&hyphen;Tour",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "shortdescription": "Bicycle through the town history by visiting the most famous buildings",
    "imageUrl": "images/tour_architectour_580.jpg",
    "thumbnail": "images/tour_architectour_375.jpg",
    "id": "architectour",
    "popular": false
  },
  {
    "name": "Viking Trails",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "shortdescription": "Follow the trail of the old viking kings",
    "imageUrl": "images/tour_viking-trails_580.jpg",
    "thumbnail": "images/tour_viking-trails_375.jpg",
    "id": "viking-trails",
    "popular": true
  }
];
loadTours(tours);
// TEMPORARY----------
})();