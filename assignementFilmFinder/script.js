const moviesUl = document.querySelector("#movieList");
const linkPart1 = ["https://www.imdb.com/title/"];

//algemene functie om de lijsten naar de dom te verplaatsen
//zorg dat je lijst met Li's terug krijgt
//creeer en plaats de image voor in de Li
//maak de a href voor de website om heen te gaan bij klik op basis van imbdID
//Li's toevoegen aan Ul nadat er een div omheen komt voor de grid
const addMoviesToDom = (array) => {
  array.map((movie) => {
    const newLi = document.createElement("li");
    const moviePoster = document.createElement("img");
    moviePoster.src = movie.poster;
    const aTag = document.createElement("a");
    const url = linkPart1.concat(movie.imdbID).join("");
    aTag.href = url;
    const divForLi = document.createElement("div");
    divForLi.className = "grid-item";
    newLi.appendChild(aTag);
    aTag.appendChild(moviePoster);
    moviesUl.appendChild(divForLi);
    divForLi.appendChild(newLi);
  });
};
addMoviesToDom(movies);

//leegmaken van de Ul om Li's toe te voegen
function clearUl() {
  while (moviesUl.firstChild) {
    moviesUl.removeChild(moviesUl.firstChild);
  }
}

//change event om nieuwe films naar de dom te sturen
const latestMovieButton = document.querySelector("#latestMoviesButton");
latestMovieButton.addEventListener("change", (e) => {
  const latestMovies = movies.filter((movie) => {
    return movie.year == "2014", movie.year > "2014";
  });
  clearUl();
  addMoviesToDom(latestMovies);
});

//filter functie op title starten en toevoegen lijst DOM
const handleOnChangeEvent = (event) => {
  const choosenTitle = event.target.value;
  switch (choosenTitle) {
    case "avenger":
      const avengerMovies = movies.filter((movie) =>
        movie.title.includes("Avenger")
      );
      clearUl();
      addMoviesToDom(avengerMovies);
      break;
    case "xmen":
      const xmenMovies = movies.filter((movie) =>
        movie.title.includes("X-Men")
      );
      clearUl();
      addMoviesToDom(xmenMovies);
      break;
    case "princess":
      const princessMovies = movies.filter((movie) =>
        movie.title.includes("Princess")
      );
      clearUl();
      addMoviesToDom(princessMovies);
      break;
    case "batman":
      const batmanMovies = movies.filter((movie) =>
        movie.title.includes("Batman")
      );
      clearUl();
      addMoviesToDom(batmanMovies);
      break;
  }
};

// add eventlistener op titleButtons buttons met zelfde class en call handleOnChangeEvent (filter functie op titel)
document.addEventListener("DOMContentLoaded", function () {
  const titleButtons = document.querySelectorAll('input[class="titleButtons"]');
  const titleButton = titleButtons.forEach((titleButton) => {
    titleButton.addEventListener("change", handleOnChangeEvent);
  });
});

// search button functie (reminder voor mezelf: toLowerCase kun je er gewoon aan plakken)
searchInput = document.querySelector("#search");
searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const searchedMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(value);
  });
  console.log(searchedMovies);
  clearUl();
  addMoviesToDom(searchedMovies);
});
