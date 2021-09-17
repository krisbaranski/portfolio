'use strict';

const hero = document.getElementById('hero');
const colors = ['turquoise', '#2ecc71', '#f6e58d', '#eb4d4b'];
const squares = 3500;

let heroTitle = document.querySelector('.hero_title');
let heroMessage = document.querySelector('.hero_message');

heroTitle.innerHTML = 'Hello World';
heroMessage.innerHTML =
  `Welcome to my portfolio. My name is Kris. ` +
  '<br/>' +
  `I'm frontend engineer passioned with coding,  discovering new technologies and using them beyond borders.` +
  '<br/>' +
  `If you like my work... leave a comment below or contact me. I'm open for new projects`;

for (let i = 0; i < squares; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  // square.addEventListener('mouseout', () => removeColor(square));

  hero.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

//
// If we want color square to disapeare after particular time, use this function
//
// function removeColor(element) {
//   element.style.background = '#1d1d1d';
//   element.style.boxShadow = '0 0 2px #000';
//   element.style.transition = '25s ease';
// }
//

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
