const movie = document.querySelectorAll('.movie');
const main = document.querySelector('.main');
const barraSearch = document.querySelector('.header-search');
const detailMovie = document.querySelector('#detail');
const btnHome = document.querySelector('#home');
const API_URL = 'https://api.themoviedb.org/3/'
const mainMenu = document.querySelector('.main-menu')
const menuUpcoming = document.querySelector('.main-menu--upcoming');
const menuTopRated = document.querySelector('.main-menu--topRated');
const menuNowPlaying = document.querySelector('.main-menu--nowPlaying');
const btnNowPlaying = document.querySelector('.nowPlaying');
const btnTopRated = document.querySelector('.topRated');
const btnUpcoming = document.querySelector('.upcoming')

movie.forEach(i => i.addEventListener('click', ShowDetail))
btnHome.addEventListener('click', HideDetail);
btnNowPlaying.addEventListener('click', getNowPlayingMovies);
btnTopRated.addEventListener('click', getTopRatedMovies);
btnUpcoming.addEventListener('click', getUpcomingMovies);


function ShowDetail (){
    main.classList.add('inactive');
    barraSearch.classList.add ('inactive');
    detailMovie.classList.remove('inactive');

}
function HideDetail() {
    main.classList.remove('inactive');
    barraSearch.classList.remove ('inactive');
    detailMovie.classList.add('inactive');
}

async function getTrendingMoviesPreview(){
    const res = await fetch(API_URL + '/trending/movie/day?api_key=' + API_KEY)
    const data = await res.json()
    const movies = data.results;
    console.log(movies);

    for (let i = 0; i < 5; i++) {
        const trendingMoviesContainer = document.querySelector('.main-movies--container')
        const moviesContainer = document.createElement('div')
        moviesContainer.classList.add('movie')

        const movieImg = document.createElement('img')
        movieImg.src = 'https://image.tmdb.org/t/p/w300' + movies[i].poster_path;
        movieImg.alt = movies[i].title;
        
        moviesContainer.appendChild(movieImg);
        trendingMoviesContainer.appendChild(moviesContainer);
        
    }
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

getTrendingMoviesPreview();

async function getTopRatedMovies(){
    const res = await fetch(API_URL + 'movie/top_rated?api_key=' + API_KEY + '&language=en-US&page=1')
    const data = await res.json();
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

    })

}

getNowPlayingMovies();
