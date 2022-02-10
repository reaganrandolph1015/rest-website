import loadPage from './modules/initial-page';
import loadHome from './modules/home';
import loadGallery from './modules/gallery';
import loadAbout from './modules/about';

init();

function navEvents() {
  // allows users to navigate website by clicking tabs
  // document selectors
  const homeBtn = document.getElementById('home');
  const galleryBtn = document.getElementById('gallery');
  const aboutBtn = document.getElementById('about');
  // event listeners
  homeBtn.addEventListener('click', loadHome);
  galleryBtn.addEventListener('click', loadGallery);
  aboutBtn.addEventListener('click', loadAbout);
}

// function to initialize webpage
function init() {
  loadPage();
  loadHome();
  navEvents();
}
