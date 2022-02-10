function setActiveBtn(id) {
  const activeBtn = document.querySelector('.tab.active');
  if (activeBtn) activeBtn.classList.remove('active');

  const homeBtn = document.getElementById(id);
  homeBtn.classList.add('active');
}

function createSection(name, data) {
  const section = document.createElement('section');
  section.classList.add('section');

  const title = document.createElement('h2');
  title.classList.add('section-title');
  title.textContent = name;
  section.appendChild(title);

  data.forEach((d) => {
    const para = document.createElement('p');
    para.classList.add('section-description');
    para.textContent = d;
    section.appendChild(para);
  });

  return section;
}

function loadAbout() {
  const content = document.getElementById('tab-content');
  content.classList.add('flex-lay');
  content.classList.remove('grid-lay');
  content.textContent = '';
  setActiveBtn('about');

  const contactSection = createSection('Phone:', [
    '856-988-7892',
    '556-987-8896',
  ]);

  const addressSection = createSection('Address:', [
    '1112 Golden Acre Street',
    '5697 New Tulson Road',
  ]);

  content.appendChild(contactSection);
  content.appendChild(addressSection);
}

export default loadAbout;
