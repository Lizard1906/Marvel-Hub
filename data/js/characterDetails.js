data = JSON.parse(localStorage.getItem('marvel-hub'))

var url = window.location.href;
var id = url.split('?id=')[1];
console.log(id)

document.getElementById('jumbotron').style.backgroundImage = 'url("data/Images/Characters/Photo/' + id + '.png';

const allCharacters = [...data.characters.heroes];
console.log(allCharacters)

let prevCharacter, nextCharacter;
allCharacters.forEach((character, index) => {
    if (character.id == id) {
        foundCharacter = character;

        if (index === 0) {
            prevCharacter = null;
        } else {
            prevCharacter = allCharacters[index - 1].id;
        }
        if (index === allCharacters.length - 1) {
            nextCharacter = null;
        } else {
            nextCharacter = allCharacters[index + 1].id;
        }

        console.log(prevCharacter)
        console.log(nextCharacter)
    }


    if (prevCharacter != null) {
        document.getElementById('prev-arrow').setAttribute('href', 'characterDetails.html?id=' + prevCharacter);
        document.getElementById('prev-arrow').classList.remove('d-none');
    }
    if (nextCharacter != null) {
        document.getElementById('next-arrow').setAttribute('href', 'characterDetails.html?id=' + nextCharacter);
        document.getElementById('next-arrow').classList.remove('d-none');
    }
});


console.log(foundCharacter)

function updateActorDetails(actor) {

    const actor_img_link = actor.name.toLowerCase().replaceAll(' ', '-')
    document.getElementById('character-img').style.backgroundImage = 'url("data/Images/Characters/Actors/' + actor_img_link + '.png")';
    document.getElementById('actor-name').innerText = actor.name;
    // calculate age
    const dateParams = actor.birth.split('/')
    const birthDate = new Date(dateParams[2], dateParams[1] - 1, dateParams[0]);
    const today = new Date();
    console.log(today)
    console.log(birthDate)
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    document.getElementById('actor-birthday').innerText = actor.birth + " (" + age + "y)";
    document.getElementById('actor-nationality').setAttribute('src', 'data/Images/Characters/Flags/' + actor.originCountry + '.png');
    document.getElementById('actor-url').setAttribute('href', actor.info);
    document.title = foundCharacter.name;
}
updateActorDetails(foundCharacter.actor[0]);
document.getElementById('character-name').innerText = foundCharacter.name

if (foundCharacter.actor.length > 1) {
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % foundCharacter.actor.length;
        updateActorDetails(foundCharacter.actor[currentIndex]);
    }, 5000); // Troca a cada 5 segundos
}


const filmography = foundCharacter.movies;
const swiperWrapperMovies = document.querySelector(".moviesSwiper .swiper-wrapper");

function createSwiperSlide(movie) {
    const swiperSlide = document.createElement("div");
    swiperSlide.classList.add("swiper-slide");

    const link = document.createElement("a");
    link.href = 'movieDetails.html?id=' + movie.id;
    link.style.textDecoration = "none";

    const poster = document.createElement("img");
    poster.src = "data/Images/Movies/MovieDetails/Poster/" + movie.id + ".png";

    // const movieName = document.createElement("p");
    // movieName.textContent = movie.title;
    // movieName.classList.add("movie-name");

    const movieYear = document.createElement("p");
    movieYear.textContent = movie.data.releaseDate.split('-')[2];
    movieYear.classList.add("movie-year");
    movieYear.style.marginBottom = "0";

    // link.appendChild(movieName);
    link.appendChild(poster);
    link.appendChild(movieYear);
    swiperSlide.appendChild(link);

    return swiperSlide;
}

filmography.forEach((movie) => {
    swiperWrapperMovies.appendChild(createSwiperSlide(movie));
});


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
