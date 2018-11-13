
function haku ({}) {
  const haku = document.getElementById("haku").value;
  fetch(`https://api.tvmaze.com/search/shows?q=${haku}`)
  .then(vastaus => vastaus.json())
  .then(sarjat => {
    const app = document.getElementById('app');
    app.innerHTML = sarjat.map(({ show }) => `
          <div id ="lista" class=" movie-content">
            ${show.image ? `<img src="${show.image.medium}">`:''}
            <div id = "tex" class="movie-info">
              <h5>${show.name}</h5>
              <span>Homepage: <a href="${show.url}">${show.url}</a></span>
              <br />
              <span>Genre: ${show.genres}</span>
              <br />
              <span>${show.summary}</span>
            </div>
          </div>
        `).join('');
  });
}

const nappi = document.querySelector('button');
nappi.addEventListener("click", haku);

