const API_URL = 'https://api.themoviedb.org/3/'

// header
const barraSearchContainer = document.querySelector('.header-search--container');
const barraSearch = document.querySelector('.header-search')
const headerBtnSearch = document.querySelector('#header--btnSearch');
const headerBtnBack = document.querySelector('.header-search--back');

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

// main search
const mainSearch = document.querySelector('.main-search');

// footer
const btnHome = document.querySelector('#home');
const btnSearch = document.querySelector('#search');