// Get tour data from JSON
(function() {
	 //fetch('http://kallevikstyle.no/portfolio1/re-cycle/json/reviews.json')
	 //.then(result => result.json())
	 //.then((reviews) => {
	 	// showAllReviews(reviews);
	 // })
	 // .catch(err => console.log(err));


// TEMPORARY-------------
	 var reviews = [
  {
    "name": "Steve Works",
    "profession": "IT student",
    "place": "Springfield, USA",
    "review": "I'm really fascinated by the viking history, so I went on the Viking Trails tour. I had a great experience, a nice bicycle ride and there was so much to see!",
    "imageUrl": "images/reviews/review_steve-works.jpg",
    "id": 1
  },
  {
    "name": "Lenny Cravings",
    "profession": "Musician",
    "place": "Limerick, Ireland",
    "review": "These guys really know how to show their city from its best side. If you like to bicycle, book a tour with Re-Cycle!",
    "imageUrl": "images/reviews/review_lenny_cravings.jpg",
    "id": 2
  },
  {
    "name": "Henriette Dalen",
    "profession": "Designer",
    "place": "Dalen, Norway",
    "review": "I didn't know Haugesund was this awesome. Now I know! Thanks for the ride!",
    "imageUrl": "images/reviews/review_henriette-dalen.jpg",
    "id": 3
  },
  {
    "name": "Geir Larsen",
    "profession": "Teacher",
    "place": "Oslo, Norway",
    "review": "I really loved the Hills & Shore tour. The guides were just great, they seem to know everything about this city and even told a lot of stories about the history of Haugesund. Recommended for sure!",
    "imageUrl": "images/reviews/review_geir-larsen.jpg",
    "id": 4
  },
  {
    "name": "Pedro Colores",
    "profession": "Painter",
    "place": "Madrid, Spain",
    "review": "Top score from me! I totally recommend doing this, there is no better way to explore a city than on a bicycle seat. The architecture tour was really interesting, and at the same time I enjoyed the fresh air this town has to offer. ¡Estupendo!",
    "imageUrl": "images/reviews/review_steve-works.jpg",
    "id": 5
  }
];
loadReviews(reviews);
// TEMPORARY----------
})();