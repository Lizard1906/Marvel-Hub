data = JSON.parse(localStorage.getItem('marvel-hub'))

var url = window.location.href;
var id = url.split('?id=')[1];
console.log(id)

document.getElementById('jumbotron').style.backgroundImage = 'url(data/Images/Movies/MovieDetails/Jumbotron/' + id + '.png'

console.log(data.stacks.movies)
Object.entries(data.stacks.movies).forEach(([stackName, stack]) => {
    if (data.activeMovieStack === stackName) {
        movieStack = stack;
    }
});

console.log(movieStack)


Object.entries(data.movies).forEach(([sagaName, movies]) => {
    movies.forEach(movie => {
        if (movie.id == id) {
            foundMovie = movie;
            movieIndex = movieStack.findIndex(movie => movie.id === id);
            console.log(movieIndex);

            if (movieIndex === -1) {
                prevMovie = null;
                nextMovie = null;
            } else {
                if (movieIndex === 0) {
                    prevMovie = null;
                } else {
                    prevMovie = movieStack[movieIndex - 1].id;
                }
                if (movieIndex === movieStack.length - 1) {
                    nextMovie = null;
                } else {
                    nextMovie = movieStack[movieIndex + 1].id;
                }
            }

            console.log(prevMovie)
            console.log(nextMovie)

            if (prevMovie != null) {
                document.getElementById('prev-arrow').setAttribute('href', 'movieDetails.html?id=' + prevMovie);
                document.getElementById('prev-arrow').classList.remove('d-none');
            }
            if (nextMovie != null) {
                document.getElementById('next-arrow').setAttribute('href', 'movieDetails.html?id=' + nextMovie);
                document.getElementById('next-arrow').classList.remove('d-none');
            }
        }
    });
});


console.log(foundMovie)


//Styles
document.getElementById('movie-img').setAttribute('src', 'data/Images/Movies/MovieDetails/Poster/' + id + '.png');
document.getElementById('movie-img').setAttribute('alt', id);

//Data
function formatDate(dateString) {
    const parts = dateString.split('-');
    if (parts.length !== 3) {
        return 'Invalid Date';
    }
    const [month, day, year] = parts;
    return `${day}-${month}-${year}`;
}

document.getElementById('movie-release-date').innerHTML = formatDate(foundMovie.data.releaseDate);
document.getElementById('movie-date').innerHTML = foundMovie.data.movieDate;
if (foundMovie.data.episodes) {
    document.getElementById('movie-length').innerHTML = foundMovie.data.episodes + " episodes (" + Math.floor(foundMovie.data.length / foundMovie.data.episodes) + " min)";
} else {
    document.getElementById('movie-length').innerHTML = Math.floor(foundMovie.data.length / 60) + "h " + foundMovie.data.length % 60 + "min";
}
document.getElementById('movie-director').innerHTML = foundMovie.data.director;
document.getElementById('movie-rating').innerHTML = parseFloat(foundMovie.data.imdb).toFixed(1);
if (foundMovie.data.streaming != null) {
    document.getElementById('movie-streaming').setAttribute('src', 'data/Images/Movies/MovieDetails/Logos/' + foundMovie.data.streaming + '.png');
} else {
    document.getElementById('movie-streaming').classList.add('d-none');
}
document.getElementById('movie-trailer').setAttribute('href', foundMovie.data.trailer);
document.title = foundMovie.title;




const moviesToWatch = foundMovie.moviesToWatch;
if (moviesToWatch.length != 0) {
    document.getElementById('movies-title').classList.remove('d-none');
    document.getElementById('movies-title').style.marginBottom = "-50px";
    const swiperWrapperMovies = document.querySelector(".moviesSwiper .swiper-wrapper");

    function createSwiperSlide(movieID) {
        console.log(movieID)
        const swiperSlide = document.createElement("div");
        swiperSlide.classList.add("swiper-slide");

        const link = document.createElement("a");
        link.href = 'movieDetails.html?id=' + movieID;

        const poster = document.createElement("img");
        // poster.classList.add("poster-img");
        poster.src = "data/Images/Movies/MovieDetails/Poster/" + movieID + ".png";

        link.appendChild(poster);
        swiperSlide.appendChild(link);

        return swiperSlide;
    }

    moviesToWatch.forEach((movieID) => {
        swiperWrapperMovies.appendChild(createSwiperSlide(movieID.id));
    });
}

// Initialize Swiper 
var swiper = new Swiper(".moviesSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 25,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
    },
});




const mainCharacters = foundMovie.mainCharacters;
console.log(mainCharacters)
if (mainCharacters.length != 0) {
    const swiperWrapperMovies = document.querySelector(".charactersSwiper .swiper-wrapper");

    function createSwiperSlide(characterID, characterActor, character, special) {
        actorID = characterActor.toLowerCase().replaceAll(' ', '-');

        const swiperSlide = document.createElement("div");
        swiperSlide.classList.add("swiper-slide");

        const link = document.createElement("a");
        link.href = 'characterDetails.html?id=' + characterID;
        link.style.textDecoration = "none";

        const poster = document.createElement("img");
        poster.classList.add("poster-img");
        poster.src = "data/Images/Characters/Actors/" + actorID + ".png";

        const actorName = document.createElement("p");
        actorName.textContent = characterActor;
        actorName.classList.add("actor-name");

        const characterName = document.createElement("p");
        characterName.textContent = character;
        characterName.classList.add("character-name");
        characterName.style.marginBottom = "0";

        link.appendChild(actorName);
        link.appendChild(poster);
        link.appendChild(characterName);

        if (special != null) {
            const specialAttribute = document.createElement("p");
            specialAttribute.textContent = "(" + special + ")";
            specialAttribute.classList.add("character-special");
            link.appendChild(specialAttribute);
        }

        swiperSlide.appendChild(link);

        return swiperSlide;
    }


    mainCharacters.forEach((character) => {
        swiperWrapperMovies.appendChild(createSwiperSlide(character.id, character.actor, character.name, character.special));
    });
}

// Initialize Swiper 
var swiper = new Swiper(".charactersSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 25,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
    },
});





