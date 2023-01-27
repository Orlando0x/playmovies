window.addEventListener('DOMContentLoaded', navigator);
window.addEventListener('hashchange', navigator);


function navigator() {
    if (location.hash.startsWith('#trending')) {
        console.log('Trends!!');
        getTrendingFull();
    } else if(location.hash.startsWith('#topRated')){
        console.log('Top Rated!!');
    } else if(location.hash.startsWith('#nowPlaying')){
        console.log('Now Playing!!');
    } else if(location.hash.startsWith('#movie=')){
        searchTitle.classList.add('inactive');
        movieDetailsContainer.classList.remove('inactive');
        headerBtnBack.classList.remove('inactive');
        mainTrending.classList.add('inactive');
        trendingMoviesContainer.classList.add('inactive');
        mainMenu.classList.add('inactive');
        mainSearch.classList.add('inactive');
        trendingFull.classList.add('inactive');
        const movie = location.hash.split('=');
        console.log(movie[1]);
        getMovieDetailById(movie[1]);


    } else if(location.hash.startsWith('#search')){
        searchTitle.classList.remove('inactive');
        movieDetailsContainer.classList.add('inactive');
        headerBtnBack.classList.remove('inactive');
        mainTrending.classList.add('inactive');
        trendingMoviesContainer.classList.add('inactive');
        mainMenu.classList.add('inactive');
        mainSearch.classList.remove('inactive');
        trendingFull.classList.add('inactive');

        mainSearch.innerHTML='';
        searchTitle.innerText='';
        if(barraSearch.value.length > 1){
            searchMovies(barraSearch.value);
            console.log('Buscando...');
        } else {
            console.log('Debe colocar algun texto en la barra de busqueda');
        }
        
    } else {
        console.log('Home!!');
        searchTitle.classList.add('inactive');
        movieDetailsContainer.classList.add('inactive');
        mainTrending.classList.remove('inactive');
        mainSearch.classList.add('inactive');
        headerBtnBack.classList.add('inactive');
        getTrendingMoviesPreview();
        mainMenu.classList.remove('inactive');
        getNowPlayingMovies();
    }
}