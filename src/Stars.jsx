import React, { useEffect, useState } from 'react';
import './Stars.css'; // Import the CSS file for star animations

const StarrySky = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newStar = {
        id: Date.now(),
        size: Math.random() * 3 + 1,
        top: Math.random() * 100 + 'vh', // Cover the full viewport height
        left: Math.random() * 100 + 'vw',
        opacity: 0,
      };

      setStars((prevStars) => [...prevStars, newStar]);

      // Remove the star after its animation completes
      setTimeout(() => {
        setStars((prevStars) => prevStars.filter(star => star.id !== newStar.id));
      }, 1500); // Delay for opacity transition and removal
    }, 1); // Increase the frequency of star creation

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <div
      id="stars"
      style={{
        position: 'fixed', // Fixes it to the viewport
        top: 0,
        left: 0,
        width: '100vw', // Full viewport width
        height: '100vh', // Full viewport height
        zIndex: -1, // Ensures it's behind other content
        pointerEvents: 'none', // Makes sure it doesn't block interactions
      }}
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            position: 'absolute',
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
            opacity: 1,
            transition: 'opacity 1s',
            animation: 'fadeInOut 2s forwards',
          }}
        />
      ))}
    </div>
  );
};

export default StarrySky;


