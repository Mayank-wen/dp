// DoctorCard.js
import React from 'react';
import './DoctorCard.css'; // Import CSS file

const DoctorCard = ({ doctor }) => {
    return (
        <div className="doctor-card">
            <img src={doctor.Image} alt={doctor.Name} className="doctor-image" />
            <div className="doctor-details">
                <h2>{doctor.Name}</h2>
                <p><strong>Specialization:</strong> {doctor.Specialization}</p>
                <p><strong>Location:</strong> {doctor.Location}</p>
                <p><strong>Hours:</strong> <br />{doctor.Hours.split('\n').map((line, index) => <span key={index}>{line}<br /></span>)}</p>
            </div>
        </div>
    );
};

export default DoctorCard;
