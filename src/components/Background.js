import React from 'react';
import Particles from 'react-tsparticles';

const Background = () => {
  const particlesInit = main => {
    console.log(main);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = container => {
    console.log(container);
  };

  return (
    <div className="z-0">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: '#0d223b',
              // value: ['#030712', '#082f49'],
            },
            start: {
              value: 'transparent',
            },
            stop: {
              value: 'transparent',
            },
            angle: 90,
          },
          fpsLimit: 30,
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
              value: '#999',
            },
            links: {
              color: '#555',
              distance: 400,
              enable: true,
              opacity: 0.3,
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
              value: 0.3,
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
    </div>
  );
};

export default Background;
