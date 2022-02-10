import loadPage from './modules/initial-page';
import loadHome from './modules/home';

loadPage();

function navEvents() {
  // allows users to navigate website by clicking tabs
  // document selectors
  const homeBtn = document.getElementById('home');
  const menuBtn = document.getElementById('menu');
  const contactBtn = document.getElementById('contact');
  // event listeners
  homeBtn.addEventListener('click', loadHome);
  menuBtn.addEventListener('click', loadMenu);
  contactBtn.addEventListener('click', loadContact);
}
