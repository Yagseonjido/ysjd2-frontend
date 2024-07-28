// src/pages/Home.js
import React, { useEffect } from 'react';


const CheckServerIsConnected = () => {

    useEffect(() => {
        fetch('http://34.64.133.142:8080/test', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(response => {
          if (response.ok) {
            return response.text(); // assuming the response is text; adjust if it's JSON or something else
          } else {
            throw new Error('Network response was not ok.');
          }
        }).then(data => {
          console.log('Success:', data); // Logging the success string to the console
        }).catch(error => {
          console.error('Error:', error);
        });
      }, []);

  return (
    <div>
     
    </div>
  );
};

export default CheckServerIsConnected;
