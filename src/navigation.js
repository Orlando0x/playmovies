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
    } else if(location.hash.startsWith('#movieDetail')){
        console.log('Movie Detail !!!!');
        /*quitar inactive a main-moiveDetail
        agregar inactice a header-search main-movies--container main-menu */
    } else if(location.hash.startsWith('#search')){
        mainTrending.classList.add('inactive');
        trendingMoviesContainer.classList.add('inactive');
        mainMenu.classList.add('inactive');
        mainSearch.classList.remove('inactive');
        trendingFull.classList.add('inactive');
        mainSearch.innerHTML='';
        if(barraSearch.value.length > 1){
            searchMovies(barraSearch.value);
            console.log('Buscando...');
        } else {
            console.log('Debe colocar algun texto en la barra de busqueda');
        }
        
    } else {
        console.log('Home!!');
        mainTrending.classList.remove('inactive');
        mainSearch.classList.add('inactive');
        getTrendingMoviesPreview();
        mainMenu.classList.remove('inactive');
        getNowPlayingMovies();
    }
}