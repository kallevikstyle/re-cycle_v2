
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
      fetch('http://kallevikstyle.no/portfolio1/re-cycle/json/reviews.json')
     .then(result => result.json())
     .then((reviews) => {
       showAllReviews(reviews);
      })
      .catch(err => console.log(err));
}

// Get reviews from JSON
(function() {
	 fetch('http://kallevikstyle.no/portfolio1/re-cycle/json/reviews.json')
	 .then(result => result.json())
	 .then((reviews) => {
	 	 showAllReviews(reviews);
	  })
	  .catch(err => console.log(err));

})();