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

/* movie.forEach(i => i.addEventListener('click', ShowDetail))  */
//btnHome.addEventListener('click', HideDetail);
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
    } )


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
    /* const res = await api(API_URL + '/trending/movie/day?api_key=' + API_KEY)
    const data = await res.json() */
    const { data } = await api('/trending/movie/day')
    const movies = data.results;
    console.log(movies);
    trendingMoviesContainer.innerHTML='';
    for (let i = 0; i < 5; i++) {

        const moviesContainer = document.createElement('div')
        moviesContainer.classList.add('movie')

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

    })

    
}
