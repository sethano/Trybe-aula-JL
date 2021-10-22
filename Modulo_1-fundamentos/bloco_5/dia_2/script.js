const body = document.body;

const title = document.createElement('h1');
title.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(title);

const div1 = document.createElement('div');
body.appendChild(div1);
div1.classList.add('main-content');

const div2 = document.createElement('div');
div1.appendChild(div2);
div2.classList.add('center-content');

const p = document.createElement('p');
div2.appendChild(p);

const divleft = document.createElement('div');
div1.appendChild(divleft);
divleft.classList.add('left-content');

const divright = document.createElement('div');
div1.appendChild(divright);
divright.classList.add('right-content');

const img = document.createElement('img');
divleft.appendChild(img);
img.src = 'https://picsum.photos/200';
img.classList.add('small-image');

const list = document.createElement('ul');
divright.appendChild(list);
const arrayNumbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
for (let i in arrayNumbers) {
  const li = document.createElement('li');
  list.appendChild(li);
  li.innerText = arrayNumbers[i];
};

for (let i = 0; i < 3; i += 1) {
  const subTitle = document.createElement('h3');
  div1.appendChild(subTitle);
  subTitle.innerText = 'sub titulo';
};

// extras
title.classList.add('title');
const subTitle = document.getElementsByTagName('h3');
for (let i = 0; i < 3; i += 1) {
  subTitle[i].classList.add('description');
};
div1.removeChild(divleft);
divright.style.marginRight = 'auto';
div1.style.backgroundColor = 'green';
list.lastChild.remove();
list.lastChild.remove();
