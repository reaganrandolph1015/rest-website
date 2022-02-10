function setActiveBtn(id) {
  const activeBtn = document.querySelector('.tab.active');
  if (activeBtn) activeBtn.classList.remove('active');

  const homeBtn = document.getElementById(id);
  homeBtn.classList.add('active');
}

function createImg(src, text, alt, side) {
  const food = document.createElement('div');
  food.classList.add('food');
  const img = document.createElement('img');
  img.setAttribute('src', src);
  img.setAttribute('alt', alt);

  const description = document.createElement('div');
  description.classList.add('description');

  const foodName = document.createElement('h2');
  foodName.textContent = text;

  const sides = document.createElement('h3');
  sides.textContent = side;

  description.appendChild(foodName);
  description.appendChild(sides);

  food.appendChild(img);
  food.appendChild(description);

  return food;
}

function loadGallery() {
  const content = document.getElementById('tab-content');
  content.classList.add('grid-lay');
  content.classList.remove('flex-lay');

  content.textContent = '';
  setActiveBtn('gallery');

  const foods = [
    createImg(
      'https://cdn.pixabay.com/photo/2021/01/18/12/49/ice-cream-5928048_960_720.jpg',
      'Icecream',
      'Icecream',
      'Great'
    ),
    createImg(
      'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg',
      'Pizza',
      'Pizza',
      'Good'
    ),
    createImg(
      'https://cdn.pixabay.com/photo/2017/01/24/20/30/soup-2006317_960_720.jpg',
      'Soup',
      'Soup',
      'Decent'
    ),
    createImg(
      'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
      'Fish',
      'Fish',
      'Alright'
    ),
    createImg(
      'https://cdn.pixabay.com/photo/2017/02/14/17/23/united-kingdom-2066475_960_720.jpg',
      'Lobster',
      'Lobster',
      'Bad'
    ),
  ];

  foods.forEach((food) => {
    content.appendChild(food);
  });
}

export default loadGallery;
