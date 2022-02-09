const loadPage = () => {
  let div = document.createElement('div');
  let title = document.createTextNode(
    'Hello, I am a node of placeholder text for tab title.'
  );
  let h1 = document.createElement('h1');
  let pageTitle = h1.appendChild(title);
  div.appendChild(pageTitle);
};
