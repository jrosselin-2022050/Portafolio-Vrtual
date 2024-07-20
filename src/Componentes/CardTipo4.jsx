import React from 'react';
import '../CSS/CardTipo4.css';

export const CardTipo4 = ({ skills }) => {
    return (
        <div className="card4-container">
            {skills.map((skill, index) => (
                <div key={index} className="card4">
                    <div className="card4-content">
                        <span className="skill-title">{skill.title}</span>
                        <span className="skill-percentage">{skill.percentage}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
