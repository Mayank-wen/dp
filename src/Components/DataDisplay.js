// DataDisplay.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DoctorCard from './DoctorCard'; // Import DoctorCard component
import './DataDisplay.css'; // Import CSS file

const DataDisplay = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        // Fetch data from the backend server
        axios.get('http://localhost:5000/data')
            .then(response => setDoctors(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="data-display">
            {doctors.map(doctor => (
                <DoctorCard key={doctor._id} doctor={doctor} />
            ))}
        </div>
    );
};

export default DataDisplay;
