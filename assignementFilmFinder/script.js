const moviesUl = document.querySelector("#movieList");

const addMoviesToDom = (movies) => {
  movies.map((movies) => {
    const newLi = document.createElement("li");
    newLi.innerHTML = movies.title;
    moviesUl.appendChild(newLi);
  });
};

addMoviesToDom(movies);


// Iterate through all the movies in the movie list. That takes this function as an argument.
//------ dus wat bedoelt men hier? movies.forEach(addMoviesToDom)? en waar moet je dat plaatsen?


// First, you want to "convert" each movie into a complete <li> element(a Dom node) with a .map function.
// We then put it into a variable. The result from the .map function will be an array with <li> elements.
// ---- bedoelt men hier dat er nu uit deze functie zoals ik hem geschreven heb dit klopt of had ik
// var app = document.querySelector('#app');
// app.innerHTML = '<ul>' + wizards.map(function (wizard) {
//	return '<li>' + wizard + '</li>';
// }).join('') + '</ul>';
// voorbeeld van internet, moeten gebruiken? 

// Step 4: Outside the .map function: place a newly made array with <li> elements in the DOM by adding each li to the ul. Our suggestion: Use a .forEach loop.
// ---- hoezo outside de map function? en waarom moet er nog een forEach komen hier?

