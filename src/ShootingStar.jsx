import React, { useEffect, useState } from 'react';
import './ShootingStar.css'; // Import for styling of shooting stars

const ShootingStars = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newStar = {
                id: Date.now(),
                size: Math.random() * 3 + 1,
                top: Math.random() * 100 + 'vh',
                left: Math.random() * 100 + 'vw',
                speed: Math.random() * 1.5 + 1, // Varying speed
                width: Math.random() * 200 + 150, // Varying width between 150px and 350px
                color: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`, // Random color
            };

            setStars((prevStars) => [...prevStars, newStar]);

            setTimeout(() => {
                setStars((prevStars) => prevStars.filter(star => star.id !== newStar.id));
            }, 2000);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            {stars.map((star) => (
                <div
                    key={star.id}
                    className='shooting-star'
                    style={{
                        position: 'absolute',
                        width: `${star.width}px`,
                        height: `${star.size}px`,
                        top: star.top,
                        left: star.left,
                        animation: `shootingStar ${star.speed}s linear forwards, fadeOut ${star.speed}s linear forwards`,
                        '--star-color': star.color, // Set the CSS variable for the color
                    }}
                />
            ))}
        </>
    );
};

export default ShootingStars;