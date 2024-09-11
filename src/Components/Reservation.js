import React from 'react';
import Reviewcards from './Reviewcards'; // Import the ReviewCard component
import './res.css'; // Ensure to create and style Reservation.css
import DataDisplay from './DataDisplay';

// Sample data for the ReviewCard components


function Reservation() {
  return (
    <div className="reservation">
 <DataDisplay/>
    </div>
  );
}

export default Reservation;
