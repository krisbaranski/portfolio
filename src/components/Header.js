import React from 'react';
import Particles from 'react-tsparticles';

const Header = () => {
  const particlesInit = main => {
    console.log(main);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = container => {
    console.log(container);
  };

  return (
    <header className="hero" id="hero">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: 'transparent',
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 200,
                duration: 1,
                opacity: 0.3,
                size: 3,
              },
              push: {
                quantity: 1,
              },
              repulse: {
                distance: 130,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#504611',
            },
            links: {
              color: '#a7830c',
              distance: 450,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 1.1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 700,
              },
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 2,
            },
          },
          detectRetina: true,
        }}
      />
      <section className="header">
        <h1>Kris Baranski</h1>
        <p>Im a frontend debveloper</p>
      </section>
    </header>
  );
};

export default Header;
