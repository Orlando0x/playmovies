const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    params: {
        'api_key': API_KEY,
    },
})

let historySearch = [];

btnMore.addEventListener('click', () => location.hash = '#trending');
btnHome.addEventListener('click', () => location.hash = '#home');
btnNowPlaying.addEventListener('click', getNowPlayingMovies);
btnTopRated.addEventListener('click', getTopRatedMovies);
btnUpcoming.addEventListener('click', getUpcomingMovies);
btnSearch.addEventListener('click', ()=> location.hash = '#search=' + barraSearch.value)
headerBtnSearch.addEventListener('click', ()=> location.hash = '#search=' + barraSearch.value)
headerBtnBack.addEventListener('click', () => {
    if(!historySearch[historySearch.length-2]){
        historySearch.pop();
        return location.hash= '#home';
    }
    location.hash = '#search=' + historySearch[historySearch.length-2] 
    barraSearch.value = historySearch[historySearch.length-2]
//Otra forma mas simple seria usando
// history.back() que se ejecute al pulsar el boton

    } )

async function getTrendingMoviesPreview(){
    /* const res = await api(API_URL + '/trending/movie/day?api_key=' + API_KEY)
    const data = await res.json() */
    const { data } = await api('/trending/movie/day')
    const movies = data.results;
    console.log(movies);
    trendingMoviesContainer.innerHTML='';
    for (let i = 0; i < 5; i++) {

        const moviesContainer = document.createElement('div')
        moviesContainer.classList.add('movie')

        moviesContainer.addEventListener('click', ()=> 
            location.hash = '#movie='+ movies[i].id
        )


        const movieImg = document.createElement('img')
        movieImg.src = 'https://image.tmdb.org/t/p/w300' + movies[i].poster_path;
        movieImg.alt = movies[i].title;
        const movieTittle = document.createElement('h2');
        movieTittle.innerText = movies[i].title;

        moviesContainer.appendChild(movieImg);
        moviesContainer.appendChild(movieTittle);
        trendingMoviesContainer.appendChild(moviesContainer);
        
    }
    trendingFull.classList.add('inactive');
    trendingMoviesContainer.classList.remove('inactive');
    btnMore.classList.remove('inactive')

/*     movies.forEach(movie => {
        const trendingMoviesContainer = document.querySelector('.main-movies--container')
        const moviesContainer = document.createElement('div')
        moviesContainer.classList.add('movie')

        const movieImg = document.createElement('img')
        movieImg.src = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
        movieImg.alt = movie.title;
        
        moviesContainer.appendChild(movieImg);
        trendingMoviesContainer.appendChild(moviesContainer);

    }) */
}



async function getTopRatedMovies(){
    const {data,status, request } = await api ('movie/top_rated')
    console.log([status, request]);
  
    const movies = data.results;
    menuTopRated.innerHTML = '';
    menuNowPlaying.classList.add('inactive');
    menuTopRated.classList.remove('inactive');
    menuUpcoming.classList.add('inactive');

    movies.forEach(movie => {
        
        const topRatedImg = document.createElement('img');
        topRatedImg.classList.add('movie');
        topRatedImg.src = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
        topRatedImg.alt = movie.title;

        menuTopRated.appendChild(topRatedImg);

        topRatedImg.addEventListener('click', ()=> 
            location.hash = '#movie='+ movie.id
        )

    })

}



async function getUpcomingMovies(){
    const res = await fetch(API_URL + 'movie/upcoming?api_key=' + API_KEY + '&language=en-US&page=1');
    const data = await res.json();
    const movies = data.results;
    menuUpcoming.innerHTML = '';
    menuNowPlaying.classList.add('inactive');
    menuTopRated.classList.add('inactive');
    menuUpcoming.classList.remove('inactive');
    movies.forEach(movie => {

        const topRatedImg = document.createElement('img');

        topRatedImg.classList.add('movie');
        topRatedImg.src = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
        topRatedImg.alt = movie.title;

        menuUpcoming.appendChild(topRatedImg);
        mainMenu.appendChild(menuUpcoming);

        topRatedImg.addEventListener('click', ()=> 
            location.hash = '#movie='+ movie.id
        )

    })

}

async function getNowPlayingMovies(){
    const res = await fetch(API_URL + 'movie/now_playing?api_key=' + API_KEY);
    const data = await res.json();
    const movies = data.results;
    menuNowPlaying.innerHTML = '';
    menuNowPlaying.classList.remove('inactive');
    menuTopRated.classList.add('inactive');
    menuUpcoming.classList.add('inactive');
    movies.forEach(movie => {

        const movieImg = document.createElement('img')
        movieImg.classList.add('movie')
        movieImg.src = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
        movieImg.alt = movie.title;

        menuNowPlaying.appendChild(movieImg);

        movieImg.addEventListener('click', ()=> 
            location.hash = '#movie='+ movie.id
        )
    })

}

async function getTrendingFull(){
    const {data} = await api('trending/movie/week');
    const movies = data.results;
    console.log(data);
    mainMenu.classList.add('inactive');
    trendingMoviesContainer.classList.add('inactive');
    btnMore.classList.add('inactive');
    trendingFull.classList.remove('inactive');
    trendingFull.innerHTML='';

    movies.forEach(movie => {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie');
        const imgMovie = document.createElement('img');
        imgMovie.src = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
        imgMovie.alt = movie.title;

        trendingFull.appendChild(movieContainer);
        movieContainer.appendChild(imgMovie);

        movieContainer.addEventListener('click', ()=> 
            location.hash = '#movie='+ movie.id
        )

    })


}

async function searchMovies(text){
    const {data} = await api('search/movie', {
        params: {
            query: text,
        }
    })
    const movies = data.results;
    console.log(historySearch[historySearch.length-2]);
    console.log(text);
    if(historySearch[historySearch.length-2] === text){
        console.log('entrara el pop');
        historySearch.pop();
    }    else {
        historySearch.push(text);
    }
    console.log(historySearch);
    searchTitle.innerText = '';
    searchTitle.innerText = 'Resultados para: '+ text;
    barraSearch.value = ''

    movies.forEach(movie => {

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('container-movie');
        const imgMovie = document.createElement('img');
        imgMovie.src = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
        imgMovie.alt = movie.title;
        const movieTittle = document.createElement('h2');
        movieTittle.innerText=movie.title;

        mainSearch.appendChild(movieContainer);
        movieContainer.appendChild(imgMovie);
        movieContainer.appendChild(movieTittle);

        movieContainer.addEventListener('click', ()=> 
            location.hash = '#movie='+ movie.id
        )

    })

    
}


async function getSimilarMoviesByID(id){
    const {data} = await api (`movie/${id}/similar`);
    const movies = data.results;
    console.log(movies);
    similarMovies.innerHTML='';
    for (let i = 0; i < 10; i++) {
        const movie = document.createElement('div');
        movie.classList.add('movie');

        const movieImg = document.createElement('img');
        movieImg.src = 'https://image.tmdb.org/t/p/w300' + movies[i].poster_path;
        movieImg.alt = movies[i].title;

        const movieTitle = document.createElement('h2');
        movieTitle.innerText = movies[i].title;

        similarContainer.appendChild(similarMovies);
        similarMovies.appendChild(movie);
        movie.appendChild(movieImg);
        movie.appendChild(movieTitle);

        movie.addEventListener('click', ()=> location.hash= '#movie='+movies[i].id)
        
    }

}

async function getMovieDetailById (id) {
    const movie = await api('movie/'+ id);
    console.log(movie.data);

    movieImg.src = 'https://image.tmdb.org/t/p/w300' + movie.data.poster_path;

    movieTitle.innerText = movie.data.title;

    releaseDate.innerText = '🗓️ ' + movie.data.release_date;
    rate.innerHTML = '⭐ '+  (movie.data.vote_average).toFixed(1) + '/10';
    duration.innerHTML = '🕜 ' + movie.data.runtime + ' min';

    synopsis.innerText = movie.data.overview;
    getSimilarMoviesByID(id)

}

getSimilarMoviesByID(536554);