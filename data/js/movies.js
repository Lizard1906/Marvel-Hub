data = JSON.parse(localStorage.getItem('data'))

if (data.activeMovieStack === "mainStack" || data.activeMovieStack === null) {
    data.activeMovieStack = "defaultStack";
    localStorage.setItem('data', JSON.stringify(data));
} 

if (data.activeMovieStack === "defaultStack") {
    document.getElementById('sort-order').classList.add('d-none');
} else{
    document.getElementById('sort-order').classList.remove('d-none')
}

Object.entries(data.stacks.movies).forEach(([stackName, stack]) => {
    if (data.activeMovieStack === stackName) {
        document.getElementById("sort-by").value = stackName.split("Stack")[0];
        moviesStack = stack;
        console.log(moviesStack);
        console.log(data.activeMovieStack)
    }
});


function sagaFromMovie(movieId) {
    let sagaName;
    Object.entries(data.movies).forEach(([saga, movies]) => {
        movies.forEach(movie => {
            if (movie.id === movieId) {
                if (saga === "infinitySaga" || saga === "multiverseSaga") {
                    sagaName = "marvel";
                } else {
                    sagaName = saga;
                }
            }
        });
    });
    return sagaName;
}

function createMovieElements(moviesStack, reverse, newType, newProduction) {
    if (reverse) {
        moviesStack.reverse();
    }

    const moviesContainer = document.getElementById("movies-container");
    moviesContainer.innerHTML = '';

    moviesStack.forEach(movie => {
        if (((movie.data.episodes && newType === "series") || (!movie.data.episodes && newType === "movies") || newType === "all") && (newProduction === "all" || sagaFromMovie(movie.id) === newProduction)) {


            const movieElement = document.createElement("div");
            movieElement.classList.add("col-2");
            movieElement.classList.add("img-card");

            const movieLink = document.createElement("a");
            movieLink.href = "movieDetails.html?id=" + movie.id;

            const movieImage = document.createElement("img");
            movieImage.src = "../Images/Movies/MovieDetails/Poster/" + movie.id + ".png";
            movieImage.classList.add("img-thumbnail");

            movieLink.appendChild(movieImage);
            movieElement.appendChild(movieLink);
            moviesContainer.appendChild(movieElement);
        }
    });
}

createMovieElements(moviesStack, false, "all", "all");



const sortBySelect = document.getElementById("sort-by");
sortBySelect.addEventListener("change", function () {
    const selectedValue = sortBySelect.value;

    if (selectedValue === "default") {
        document.getElementById('sort-order').classList.add('d-none');
        document.querySelector('#sort-order input[value="desc"]').checked = false;
    } else {
        document.getElementById('sort-order').classList.remove('d-none');
    }

    data.activeMovieStack = selectedValue + "Stack";
    localStorage.setItem('data', JSON.stringify(data));
    console.log("active " + data.activeMovieStack);

});


function submitFilters() {

    // stack by order
    const newStackName = sortBySelect.value + "Stack";
    let newStack;
    Object.entries(data.stacks.movies).forEach(([stackName, stack]) => {
        if (newStackName === stackName) {
            newStack = [...stack];
        }
    });

    // ascending or descending
    const descendingRadio = document.querySelector('#sort-order input[value="desc"]');

    // movies or series
    const newType = document.getElementById("type").value;

    // production
    const newProduction = document.getElementById("productor").value;

    createMovieElements(newStack, descendingRadio.checked, newType, newProduction);
}

function resetFilters() {
    document.getElementById("sort-by").value = "default";
    document.getElementById('sort-order').classList.add('d-none');
    document.querySelector('#sort-order input[value="desc"]').checked = false;
    document.getElementById("type").value = "all";
    document.getElementById("productor").value = "all";
    createMovieElements(data.stacks.movies.defaultStack, false, "all", "all");

    data.activeMovieStack = "defaultStack";
    localStorage.setItem('data', JSON.stringify(data));

}


document.addEventListener("DOMContentLoaded", function() {
    function showFooter() {
        var footer = document.querySelector(".footer");
        if (footer) {
            footer.classList.remove("d-none");
        }
    }
    showFooter();
});
