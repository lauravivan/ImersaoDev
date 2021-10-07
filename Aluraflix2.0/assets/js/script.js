let moviesAndSeries = [];

function addMovieOrSeries() {
    let favoriteOnePoster = document.getElementById("movie-and-series").value;
    let favoriteOneName = document.getElementById("name").value;
    if (favoriteOnePoster.endsWith(".jpg")) {
        showPosterOnScreen(favoriteOnePoster, favoriteOneName);
    } else {
        console.error("Endereço de filme ou série inválido");
    }
    clear();
}

function delMovieOrSeries() {
    let divUserList = document.getElementById("userList");
    let toDelete = document.getElementById("name-delete").value;
    for (i = 0; i < moviesAndSeries.length; i++) {
        if ((moviesAndSeries[i] != null) && (moviesAndSeries[i].toLowerCase().includes(toDelete.toLowerCase()))) {
            delete moviesAndSeries[i];
        }
    }

    divUserList.innerText = "";

    for (i = 0; i < moviesAndSeries.length; i++) {
        if (moviesAndSeries[i] != null) {
            div.innerHTML += moviesAndSeries[i];
        }
    }
    document.getElementById("name-delete").value = "";
}

function showPosterOnScreen(favoriteOnePoster, favoriteOneName) {
    let divUserList = document.getElementById("userList");
    let poster = `<figure>
                    <img src="${favoriteOnePoster}">
                    <figcaption>${favoriteOneName}</figcaption>
                </figure>`;
    moviesAndSeries.push(poster);
    divUserList.innerHTML += poster;
}

function clear() {
    document.getElementById("movie-and-series").value = "";
    document.getElementById("name").value = "";
}

