// creates header and sets id & text
function createHeader(id, text) {
  const header = document.createElement('header');
  header.setAttribute('id', id);
  const logo = document.createElement('h1');
  logo.textContent = text;
  header.appendChild(logo);

  return header;
}

// allows you to create a button and set id and text
function createBtn(id, text) {
  const btn = document.createElement('button');
  btn.setAttribute('id', id);
  const span = document.createElement('span');
  span.textContent = text;
  btn.appendChild(span);
  btn.classList.add('tab');

  return btn;
}

// creates Navigation bar
function createNav(id) {
  const nav = document.createElement('nav');
  nav.setAttribute('id', id);

  const homeBtn = createBtn('home', 'Home');
  const galleryBtn = createBtn('gallery', 'Gallery');
  const aboutBtn = createBtn('about', 'About');

  nav.appendChild(homeBtn);
  nav.appendChild(galleryBtn);
  nav.appendChild(aboutBtn);

  return nav;
}

// creates Main section of web page
function createMain(id) {
  const main = document.createElement('main');
  main.setAttribute('id', id);

  return main;
}

// creates footer and sets id and text content
function createFooter(id, text) {
  const footer = document.createElement('footer');
  footer.setAttribute('id', id);
  const h3 = document.createElement('h3');
  h3.textContent = text;
  footer.appendChild(h3);

  return footer;
}

function loadPage() {
  const content = document.getElementById('content');
  // header
  const header = createHeader('header', 'Good Eating');
  content.appendChild(header);
  // nav
  const nav = createNav('nav');
  content.appendChild(nav);
  // tab content
  const tabContent = createMain('tab-content');
  content.appendChild(tabContent);
  // footer
  const footer = createFooter('footer', 'created by Reagan');
  content.appendChild(footer);
}

export default loadPage;
