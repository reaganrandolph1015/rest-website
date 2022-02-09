const content = document.getElementById('content');
const text = document.createTextNode(
  'This company offers a variety of delicious platters. Entrees and sides are free on orders exceeding $75. We value all customers and employees.'
);
const h1 = document.createElement('h1');
let img = document.createElement('img');
img.src =
  'https://media.istockphoto.com/photos/foods-high-in-zinc-picture-id1289940519';
h1.appendChild(text);
content.appendChild(h1);
content.appendChild(img);

function textCreate(cont) {
  let textCont = document.createTextNode(cont);
}

//function imgCreate(src, alt, title) {
//  let img = IEWIN ? new Image() : document.createElement('img');
//  img.src = src;
//
//  if (alt != null) img.alt = alt;
//  if (title != null) img.title = title;
//  return img;
//}
