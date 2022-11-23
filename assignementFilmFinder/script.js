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
  console.log(choosenTitle);
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
  const titleButton = titleButtons.forEach(function (titleButton) {
    titleButton.addEventListener("change", handleOnChangeEvent);
  });
});

// search button functie
searchInput = document.querySelector("#search");
searchInput.addEventListener("input", (e) => {
  const value = e.target.value;
  const searchedMovies = movies.filter((movie) => {
    return movie.title.includes(value);
  });
  console.log(searchedMovies);
  clearUl();
  addMoviesToDom(searchedMovies);
});
// DIT WERKT NU ALLEEN ALS Avenger bv dus eerste letter uppercase
// als ik alles lowercase zet, niet goed, alles uppercase, niet goed
// hoe los ik dit op dat het altijd werkt? --------------------------

const linkPart1 = ["https://www.imdb.com/title/"];
// klikken op de poster en naar de IMBD site gaan
for (i = 0; i < movies.lenght; i++) {
  const url = linkPart1.concat(movie.imbdId);
  url.join("");
  console.log(url);
  const aTag = document.createElement("a");
  const href = document.createElement("href");
  href.innerHTML = url;
  aTag.appendChild(href);
  newLi.appendChild(aTag);
}
///// weet eigenlijk  niet goed wat ik hier aan het doen ben :D 