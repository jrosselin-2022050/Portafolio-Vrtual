import React from 'react';
import '../CSS/CardTipo1.css';

export const CardTipo1 = ({ title, description, imageUrl }) => {
  return (
    <div className='card'>
 
      <div className='card-content'>
        <h3 className='card-title'>{title}</h3>
        <p className='card-description'>{description}</p>
      </div>
    </div>
  );
};
