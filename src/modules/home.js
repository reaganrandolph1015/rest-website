function createAbout() {
  const about = document.createElement('section');
  about.classList.add('section');

  const title = document.createElement('h2');
  title.classList.add('section-title');
  title.textContent = 'About';

  about.appendChild(title);

  const para = document.createElement('p');
  para.classList.add('section-description');
  para.textContent =
    'Filler text content for about paragraph. (Will be updated later)';
  about.appendChild(para);

  return about;
}

function setActiveBtn(id) {
  const activeBtn = document.querySelector('.tab.active');
  if (activeBtn) activeBtn.classList.remove('active');

  const homeBtn = document.getElementById(id);
  homeBtn.btn.classList.add('active');
}

function loadHome() {
  const content = document.getElementById('tab-content');
  content.classList.add('flex-lay');
  content.classList.remove('grid-lay');

  content.textContent = '';

  const aboutSection = createAbout();

  setActiveBtn('home');

  content.appendChild(aboutSection);
}

export default loadHome;
