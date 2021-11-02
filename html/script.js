'use strict';

const hero = document.getElementById('hero');
const colors = ['turquoise', '#2ecc71', '#f6e58d', '#eb4d4b'];
let squares = [];

// Square Interval functionality
//

function createSquares() {
  hero.forEach(square => {
    for (let i = 0; i < 3500; i++) {
      const squareEl = document.createElement('div');
      squareEl.classList.add('square');
      hero.appendChild(squareEl);
    }
  });
}

hero.addEventListener('load', () => {
  createSquares();
  setInterval(randomSelect(), 100);
});

function setColor(element) {
  const colorEl = getRandomColor();
  element.style.background = colorEl;
  // element.style.boxShadow = `0 0 2px ${colorEl}, 0 0 5px ${colorEl}`;
}

function randomSelect() {
  setInterval(() => {
    pickRandomSquare();
  }, 100);
  setColor();
}

function pickRandomSquare() {
  const square = document.querySelectorAll('.square');
  return square[Math.floor(Math.random() * squares)];
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

// function removeColor(element) {
//   element.style.background = '#fff';
//   element.style.transition = '25s ease';
//   // element.style.boxShadow = '0 0 2px #000';
// }

// for (let i = 0; i < squares; i++) {
//   const square = document.createElement('div');
//   square.classList.add('square');

//   square.addEventListener('mouseover', () => setColor(square));
//   // square.addEventListener('mouseout', () => removeColor(square));

//   hero.appendChild(square);
// }

//
// If we want color square to disapeare after particular time, use this function
//
// function removeColor(element) {
//   element.style.background = '#1d1d1d';
//   element.style.boxShadow = '0 0 2px #000';
//   element.style.transition = '25s ease';
// }
//

let heroTitle = document.querySelector('.hero_title');
let heroMessage = document.querySelector('.hero_message');
let main = document.querySelector('.main');

heroTitle.innerHTML = 'Hello World';
heroMessage.innerHTML =
  `Welcome to my portfolio. My name is Kris. ` +
  '<br/>' +
  `I'm frontend engineer passioned with coding,  discovering new technologies and using them beyond borders.` +
  '<br/>' +
  `If you like my work... leave a comment below or contact me. I'm open for new projects`;
main.innerHTML = 'Recent Projects';
