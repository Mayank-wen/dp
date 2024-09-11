
import React from 'react';
import './style.css';

const MedicalMythCard = ({ imgSrc, altText, mythTitle, mythDescription }) => (
    <div className="myth-card">
        <img src={imgSrc} alt={altText} />
        <div className="myth-info">
            <h3>{mythTitle}</h3>
            {mythDescription}
        </div>
    </div>
);

export default MedicalMythCard;
