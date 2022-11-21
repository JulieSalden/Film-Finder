const moviesUl = document.querySelector("#movieList");

//algemene functie om de lijsten naar de dom te verplaatsen
//zorg dat je lijst met Li's terug krijgt
//creeer en plaats de image voor in de Li
//Li's toevoegen aan Ul
const addMoviesToDom = (array) => {
  array.map((movie) => {
    const newLi = document.createElement("li");
    const moviePoster = document.createElement("img");
    moviePoster.src = movie.poster;
    newLi.appendChild(moviePoster);
    moviesUl.appendChild(newLi);
  });
}; //// dit werkt ///////

addMoviesToDom(movies);

//filter functie voor jaartal boven 2014
const latestMovies = movies.filter((movie) => {
  return movie.year == "2014", movie.year > "2014";
});
console.log(latestMovies); ///// dit werkt ////

//change event om nieuwe films naar de dom te sturen
const latestMovieButton = document.querySelector("#latestMoviesButton");
latestMovieButton.addEventListener("change", (e) => {
  addMoviesToDom(latestMovies); 
  /// addMoviesToDom WERKT NIET WHYYYYYY???-----------------------------------??
});


//event dat gaat rollen wanneer filterButton geklikt wordt en filter functie starten en toevoegen lijst DOM
const handleOnChangeEvent = (event) => {
  const choosenTitle = event.target.value;
  console.log(choosenTitle);
  switch (choosenTitle) {
    case "avenger":
      const avengerMovies = movies.map((movie) => {
        return movies.filter((movie) => movie.title.includes("Avenger"));
      });
      console.log(avengerMovies);
      addMoviesToDom(avengerMovies);
      break;
    case "xmen":
      const xmenMovies = movies.filter((movie) => {
        return movies.filter((movie) => movie.title.includes("X-men"));
      });
      addMoviesToDom(xmenMovies);
      break;
    case "princess":
      const princessMovies = movies.filter((movie) => {
        return movies.filter((movie) => movie.title.includes("Princess"));
      });
      addMoviesToDom(princessMovies);
      break;
    case "batman":
      const batmanMovies = movies.filter((movie) => {
        return movies.filter((movie) => movie.title.includes("Batman"));
      });
      addMoviesToDom(batmanMovies);
      break;
  }
}; /// DIT WERKT NIETTT ---------------------------------------------??

// add eventlistener op titleButtons buttons met zelfde class
document.addEventListener("DOMContentLoaded", function () {
  const titleButtons = document.querySelectorAll('input[class="titleButtons"]');
  const titleButton = titleButtons.forEach(function (titleButton) {
    titleButton.addEventListener("change", handleOnChangeEvent);
  });
}); ///// dit werkt //////
