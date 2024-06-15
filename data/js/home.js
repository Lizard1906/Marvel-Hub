data = JSON.parse(localStorage.getItem('data'))
data.activeMovieStack = "mainStack";
localStorage.setItem('data', JSON.stringify(data));

const infinityMovies = data.movies.infinitySaga;
const multiverseMovies = data.movies.multiverseSaga;

const swiperWrapperInfinity = document.querySelector(".infinitySwiper .swiper-wrapper");
const swiperWrapperMultiverse = document.querySelector(".multiverseSwiper .swiper-wrapper");

function createSwiperSlide(movie) {
    const swiperSlide = document.createElement("div");
    swiperSlide.classList.add("swiper-slide");

    const link = document.createElement("a");
    link.href = 'movieDetails.html?id='+movie.id;

    const poster = document.createElement("img");
    poster.classList.add("poster-img");
    poster.src = "../Images/Movies/MovieDetails/Poster/" + movie.id +".png";

    link.appendChild(poster);
    swiperSlide.appendChild(link);

    return swiperSlide;
}

infinityMovies.forEach((movie) => {
    swiperWrapperInfinity.appendChild(createSwiperSlide(movie));
});

multiverseMovies.forEach((movie) => {
    swiperWrapperMultiverse.appendChild(createSwiperSlide(movie));
});



var swiperInfinity = new Swiper(".infinitySwiper", {
    slidesPerView: "3",
    spaceBetween: 50,
    navigation: {
        nextEl: '#infinity-right',
        prevEl: '#infinity-left',
    },
});

var swiperMultiverse = new Swiper(".multiverseSwiper", {
    slidesPerView: "3",
    spaceBetween: 50,
    navigation: {
        nextEl: '#multiverse-right',
        prevEl: '#multiverse-left',
    },
});
