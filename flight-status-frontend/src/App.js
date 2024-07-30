import React, { useEffect } from 'react';
import FlightStatus from './components/FlightStatus';
import { requestForToken, onMessageListener } from './firebase';
import './App.css';

function App() {
  useEffect(() => {
    const requestPermission = async () => {
      try {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          await requestForToken();
        } else if (permission === 'denied') {
          console.log('Notification permission denied.');
        } else if (permission === 'default') {
          console.log('Notification permission dismissed.');
        }
      } catch (error) {
        console.error('An error occurred while requesting notification permission: ', error);
      }
    };

    requestPermission();

    onMessageListener()
      .then(payload => {
        console.log('Message received. ', payload);
        new Notification(payload.notification.title, {
          body: payload.notification.body,
        });
      })
      .catch(err => console.log('failed: ', err));
  }, []);

  return (
      <div className="App">
        <h1>Flight Status Updates</h1>
        <FlightStatus />
      </div>
    
  );
}

export default App;
