
function loadReviews(reviews) {
  const showReviews = document.createElement('div'),
    parent = document.querySelector('#reviews');

  parent.innerHTML = "<header><h2>Reviews</h2><hr></header>";
  console.log(reviews);
  // Sort the array in random order
  reviews.sort(function(a, b) {
    return 0.5 - Math.random();
  });

  // Load two random reviews on main page
  displayReviews(reviews.pop());
  displayReviews(reviews.pop());

  // Display 'show more' button
  showReviews.className = "showReviews more";
  showReviews.innerHTML = "Show more&period;&period;&period;";
  parent.appendChild(showReviews);

  // Event listener for showReviews button
  showReviews.addEventListener('click', function() {
    if (showReviews.classList.contains("more")) {
      for (let i = 0; i < reviews.length; i++) {
        displayReviews(reviews[i]);
      }
      // Remove 'show more' button, and append 'show less' button
      parent.removeChild(showReviews);
      showReviews.innerHTML = "Show less&period;&period;&period;"
      showReviews.classList.remove("more");
      showReviews.classList.add("less");
      parent.appendChild(showReviews);
    } else if (showReviews.classList.contains("less")) {
      reLoadReviews();
      
    }
  });
}

// Display reviews on page
function displayReviews(item) {
  const parent = document.querySelector('#reviews'),
    reviewContainer = document.createElement('section');

  reviewContainer.innerHTML = `
    <img src="${item.imageUrl}" alt="Review by ${item.name}">
    <h3>${item.name}</h3>
    <h4>${item.profession}<br>${item.place}</h4>
    <p>${item.review}</p>
  `;

  parent.appendChild(reviewContainer); 
}

function reLoadReviews() {
  // Reload reviews from JSON and start over
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
      "imageUrl": "images/reviews/review_lenny-cravings.jpg",
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
      "imageUrl": "images/reviews/review_pedro-colores.jpg",
      "id": 5
    }
  ];
  loadReviews(reviews);
}

// Get reviews from JSON
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
    "imageUrl": "images/reviews/review_lenny-cravings.jpg",
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
    "imageUrl": "images/reviews/review_pedro-colores.jpg",
    "id": 5
  }
];
loadReviews(reviews);
// TEMPORARY----------
})();