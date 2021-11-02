import React from 'react';

const Header = props => {
  // const hero = document.getElementById('hero');
  // const colors = ['turquoise', '#2ecc71', '#f6e58d', '#eb4d4b'];
  // const squares = 8000;

  // for (let i = 0; i < squares; i++) {
  //   const square = document.createElement('div');
  //   square.classList.add('square');

  //   square.addEventListener('mouseover', () => setColor(square));

  //   hero.appendChild(square);
  // }

  // function setColor(element) {
  //   const color = getRandomColor();
  //   element.style.background = color;
  //   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  // }

  // function getRandomColor() {
  //   return colors[Math.floor(Math.random() * colors.length)];
  // }

  return (
    <header className="hero colors" id="hero">
      <section className="header">
        <h1 className="hero_title">Frontend Developer Portfolio</h1>
        <h4 className="hero_message">
          passionate about creating new projects
          <br /> changing the way, you experience the web
        </h4>
      </section>
    </header>
  );
};

export default Header;
