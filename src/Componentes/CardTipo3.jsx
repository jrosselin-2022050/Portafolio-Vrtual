import React from 'react';
import '../CSS/CardTipo3.css';

export const CardTipo3 = ({ img, name, description, githubUrl }) => {
  return (
    <div className="cardTipo3">
      <div className="card-info3">
        <img src={img} alt={name} className="card-img3" />
        <h3 className="title3">{name}</h3>
        <p className="description3">{description}</p>
        <a href={githubUrl} className="github-link3" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
};
