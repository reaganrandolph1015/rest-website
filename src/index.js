import loadPage from './modules/initial-page';
import loadHome from './modules/home';
import loadGallery from './modules/gallery';

init();

function navEvents() {
  // allows users to navigate website by clicking tabs
  // document selectors
  const homeBtn = document.getElementById('home');
  const galleryBtn = document.getElementById('gallery');
  const contactBtn = document.getElementById('contact');
  // event listeners
  homeBtn.addEventListener('click', loadHome);
  galleryBtn.addEventListener('click', loadGallery);
  //contactBtn.addEventListener('click', loadContact);
}

// function to initialize webpage
function init() {
  loadPage();
  loadHome();
  navEvents();
}
