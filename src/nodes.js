const API_URL = 'https://api.themoviedb.org/3/'

// header
const header = document.querySelector('.header-container');
const barraSearchContainer = document.querySelector('.header-search--container');
const barraSearch = document.querySelector('.header-search')
const headerBtnSearch = document.querySelector('#header--btnSearch');
const headerBtnBack = document.querySelector('.header-search--back');
const searchTitle = document.querySelector('.searchTitle');

// main
const main = document.querySelector('.main');
const mainTrending = document.querySelector('.main-trending');
const btnMore = document.querySelector('.more');
const trendingMoviesContainer = document.querySelector('.main-movies--container');
const movie = document.querySelectorAll('.movie');
const mainMenu = document.querySelector('.main-menu')
const btnNowPlaying = document.querySelector('.nowPlaying');
const btnTopRated = document.querySelector('.topRated');
const btnUpcoming = document.querySelector('.upcoming');
const menuNowPlaying = document.querySelector('.main-menu--nowPlaying');
const menuTopRated = document.querySelector('.main-menu--topRated');
const menuUpcoming = document.querySelector('.main-menu--upcoming');
const trendingFull = document.querySelector('.main-trending--full');

//Movie details
const movieDetailsContainer = document.querySelector('.main-movieDetail');
const movieImg = document.querySelector('.posterImg');
const movieTitle = document.querySelector('.title');
const movieDetails = document.querySelector('.header-detail--datos');
const releaseDate = document.querySelector('.releaseDate');
const duration = document.querySelector('.runtime');
const rate = document.querySelector('.rate');
const descriptionContainer = document.querySelector('main-movieDetail--description');
const synopsis = document.querySelector('.synopsis');

// Similar Movies
const similarContainer = document.querySelector('.similar-container');
const similarMovies = document.querySelector('.similar-movie');

// main search
const mainSearch = document.querySelector('.main-search');

// footer
const btnHome = document.querySelector('#home');
const btnSearch = document.querySelector('#search');