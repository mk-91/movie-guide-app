let movieNameRef = document.getElementById('movie-name');
let searchBtn = document.getElementById('search-btn');
let result = document.getElementById('result');

// function to fetch data from API

let getMovie = () => {
  let movieName = movieNameRef.value;
  let url = `http://www.ombapi.com/?t=${movieName}&apikey=${key}`;

  if (movieName.lenght <= 0) {
    //show message if input field is empty
    result.innerHTML = `<h3 class"msg">Please enter a movie name </h3>`;
  } else {
    // fetch if input field isn't empty
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        // if movie exist in datebase
        if (data.Response == 'True') {
          result.innerHTML = `
            <div class="info">
              <img src=${data.Poster} class="poster">
              <div>
                <h2>${data.Title}</h2>
                <div class="rating">
                  <img src="stare-icon.svg">
                  <h4>${data.imdbRating}</h4>
                </div>
                <div class="details">
                  <span>${data.Rated}</span>
                  <span>${data.Year}</span>
                  <span>${data.Runtime}</span>
                </div>
                <div class="genre">
                  <div>${data.Genre.split(',').join('</div><div>')}</div>
                </div>
              </div>
              <h3>Plot:</h3>
              <p>${data.Plot}</p>
              <h3>Cast:</h3>
              <p>${data.Actors}</p>

        `;
        }
      });
  }
};
