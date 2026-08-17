async function loadData() {

    const currentLoadId = (window.__marvelHubLoadDataRunId || 0) + 1;
    window.__marvelHubLoadDataRunId = currentLoadId;

    const onlyEssentialMovies = typeof window.__marvelHubOnlyEssentialMovies === 'boolean'
        ? window.__marvelHubOnlyEssentialMovies
        : true;

    let movies;
    let characters;

    try {
        const [moviesResponse, charactersResponse] = await Promise.all([
            fetch('data/movies.json'),
            fetch('data/characters.json')
        ]);

        [movies, characters] = await Promise.all([
            moviesResponse.json(),
            charactersResponse.json()
        ]);


    } catch (error) {
        console.error(error);
    }

    data = {}
    data.movies = movies
    data.onlyEssentialMovies = onlyEssentialMovies

    if (!onlyEssentialMovies) {
        Object.values(data.movies).forEach((movieList) => {
            movieList.forEach((movie) => {
                movie.visible = true;
            });
        });
    }



    //stacks

    //movie stacks

    mainStack = [];
    Object.entries(data.movies.infinitySaga).forEach(movie => {
        mainStack.push(movie[1]);
    });
    Object.entries(data.movies.multiverseSaga).forEach(movie => {
        mainStack.push(movie[1]);
    });

    defaultStack = [];
    Object.entries(data.movies).forEach(([sagaName, movies]) => {
        movies.forEach(movie => {
            defaultStack.push(movie);
        });
    });

    chronologicalStack = [...defaultStack];
    // Definindo a ordem das seasons
    const seasonOrder = ["early", "spring", "middle", "summer", "fall", "christmas", "end", null];

    // Função de ordenação
    chronologicalStack.sort((a, b) => {
        const yearA = a.data.movieDate.year;
        const yearB = b.data.movieDate.year;

        // Ordena por ano
        if (yearA !== yearB) {
            return yearA - yearB;
        }

        // Se os anos são iguais, ordena por season
        const seasonA = a.data.movieDate.season;
        const seasonB = b.data.movieDate.season;

        const seasonIndexA = seasonOrder.indexOf(seasonA);
        const seasonIndexB = seasonOrder.indexOf(seasonB);

        if (seasonIndexA !== seasonIndexB) {
            return seasonIndexA - seasonIndexB;
        }

        // Se as seasons são iguais, ordena por releaseDate
        const releaseDateA = new Date(a.data.releaseDate);
        const releaseDateB = new Date(b.data.releaseDate);

        return releaseDateA - releaseDateB;
    });

    ratingStack = [...defaultStack];
    ratingStack.sort((a, b) => a.data.imdb.value - b.data.imdb.value);

    lengthStack = [...defaultStack];
    lengthStack.sort((a, b) => a.data.length - b.data.length);

    releaseStack = [...defaultStack];
    releaseStack.sort((a, b) => new Date(a.data.releaseDate) - new Date(b.data.releaseDate));

    totalStacks = {}
    totalStacks.movies = { mainStack, defaultStack, chronologicalStack, ratingStack, lengthStack, releaseStack }

    data.stacks = totalStacks
    if (localStorage.getItem('marvel-hub')) {
        const savedData = JSON.parse(localStorage.getItem('marvel-hub'));
        if (savedData.activeMovieStack) {
            data.activeMovieStack = savedData.activeMovieStack;
        } else {
            data.activeMovieStack = null;
        }
        if (savedData.reversedStack) {
            data.reversedStack = savedData.reversedStack;
        } else {
            data.reversedStack = false;
        }
        if (typeof savedData.onlyEssentialMovies === 'boolean') {
            data.onlyEssentialMovies = savedData.onlyEssentialMovies;
        }
    } else {
        data.activeMovieStack = null;
        data.reversedStack = false;
    }


    // characters

    if (currentLoadId !== window.__marvelHubLoadDataRunId) {
        return;
    }

    characters.forEach(character => {
        releaseStack.forEach(movie => {
            if (movie.mainCharacters.some(mainCharacter => mainCharacter.id === character.id && mainCharacter.special !== "uncredited")) {
                if (!character.movies) {
                    character.movies = [];
                }
                character.movies.push(movie);
            }
        })
    })

    data.characters = characters

    if (currentLoadId !== window.__marvelHubLoadDataRunId) {
        return;
    }

    localStorage.clear();
    localStorage.setItem('marvel-hub', JSON.stringify(data))
    console.log(data)
}

if (!window.__marvelHubSkipAutoLoadData) {
    loadData();
}
