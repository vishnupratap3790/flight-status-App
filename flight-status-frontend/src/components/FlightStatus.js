import React, { useState } from 'react';
import axios from 'axios';
import './FlightStatus.css';

const FlightStatus = () => {
  const [airlineName, setAirlineName] = useState('');
  const [flightNumber, setFlightNumber] = useState('');
  const [flights, setFlights] = useState([]);

  const fetchFlightStatus = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/flights', {
        params: {
          airline_name: airlineName,
          flight_number: flightNumber
        }
      });
      setFlights(response.data);
    } catch (error) {
      console.error('Error fetching flight status:', error);
    }
  };

  return (
    <div className="container">
      <div className="form-group">
        <input
          type="text"
          placeholder="Airline Name"
          value={airlineName}
          onChange={(e) => setAirlineName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Flight Number"
          value={flightNumber}
          onChange={(e) => setFlightNumber(e.target.value)}
        />
        <button onClick={fetchFlightStatus}>Search</button>
      </div>
      <div className="results">
        {flights.map((flight) => (
          <div key={flight._id} className="flight-card">
            <h2>{flight.airline.name} - {flight.flight.number}</h2>
            <p>Status: <strong>{flight.flight_status}</strong></p>
            <div className="flight-details">
              <div className="flight-section">
                <h3>Departure</h3>
                <p>Airport: {flight.departure.airport}</p>
                <p>Scheduled: {flight.departure.scheduled}</p>
                <p>Estimated: {flight.departure.estimated}</p>
                <p>Actual: {flight.departure.actual || 'N/A'}</p>
                <p>Delay: {flight.departure.delay || 'N/A'} minutes</p>
              </div>
              <div className="flight-section">
                <h3>Arrival</h3>
                <p>Airport: {flight.arrival.airport}</p>
                <p>Scheduled: {flight.arrival.scheduled}</p>
                <p>Estimated: {flight.arrival.estimated}</p>
                <p>Actual: {flight.arrival.actual || 'N/A'}</p>
              </div>
              {flight.flight.codeshared && (
                <div className="flight-section">
                  <h3>Codeshared Flight</h3>
                  <p>Airline: {flight.flight.codeshared.airline_name}</p>
                  <p>Flight Number: {flight.flight.codeshared.flight_number}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightStatus;
