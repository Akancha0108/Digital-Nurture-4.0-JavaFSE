import logo from './logo.svg';
import './App.css';

import React from 'react';
import './App.css';
import officeImage from './office.png'; 

function App() {
  const element = "Office Space";

  const officeSpaces = [
    { Name: "DBS", Rent: 50000, Address: "Chennai" },
    { Name: "WeWork", Rent: 70000, Address: "Bangalore" },
    { Name: "Regus", Rent: 45000, Address: "Hyderabad" },
  ];

  return (
    <div className="App">
      <h1>{element}, at Affordable Range</h1>
      {
        officeSpaces.map((item, index) => {
          const rentColor = item.Rent <= 60000 ? 'textRed' : 'textGreen';
          return (
            <div key={index}>
              <img src={officeImage} width="25%" height="25%" alt="Office Space" />
              <h1>Name: {item.Name}</h1>
              <h3 className={rentColor}>Rent: Rs. {item.Rent}</h3>
              <h3>Address: {item.Address}</h3>
            </div>
          );
        })
      }
    </div>
  );
}

export default App;
