import React, { useState, useEffect } from 'react';
import yo from '../Img/yo.jpg';
import '../CSS/FotoYo.css';

export const Yo = ({ text }) => {
    const [translateY, setTranslateY] = useState(0);

    const handleMouseMove = (e) => {
        const height = e.currentTarget.clientHeight;
        const y = e.clientY - e.currentTarget.getBoundingClientRect().top;
        const percentage = y / height;
        setTranslateY(percentage * 100);
    };

    const handleMouseLeave = () => {
        setTranslateY(0);
    };

    return (
        <div 
            className='Yo' 
            onMouseMove={handleMouseMove} 
            onMouseLeave={handleMouseLeave}
        >
            <img 
                src={yo} 
                alt="Yo" 
                style={{ transform: `translateY(${translateY}px)` }} 
            />
            <span>&nbsp;&nbsp;{text}</span>
        </div>
    );
};
