const apiKey = "b9ce6470";
const input = document.querySelector(".text");

const searchMovie = () => {
  const task = input.value;
  if (!task) {
    alert("Please enter a movie name");
    return;
  }
  fetch(`http://www.omdbapi.com/?s=${task}&apikey=${apiKey}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.Response === "True") {
        displayMovie(data.Search);
      } else {
        alert("Movie not found");
      }
    });
};

const displayMovie = (movies) => {
  const MovieResultContainer = document.querySelector("#movieResults");
  MovieResultContainer.innerHTML = "";

  movies.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.innerHTML = `
      <div class="movieCard">
        <div id="movieImgBlock">
          <img src="${movie.Poster}"  Poster">
        </div>
        
      </div>
    `;
    MovieResultContainer.appendChild(movieElement);
  });
};
