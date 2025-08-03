import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';


function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}


function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}


function UserGreeting() {
  return (
    <div>
      <h1>Welcome back</h1>
      <p>You can now book your flight tickets below.</p>
      {}
      <ul>
        <li>Flight: NYC to LA - $300</li>
        <li>Flight: SF to TX - $200</li>
      </ul>
      <button>Book Ticket</button>
    </div>
  );
}


function GuestGreeting() {
  return (
    <div>
      <h1>Please sign up.</h1>
      <p>Browse available flights below:</p>
      {}
      <ul>
        <li>Flight: NYC to LA - $300</li>
        <li>Flight: SF to TX - $200</li>
      </ul>
    </div>
  );
}


function Greeting(props) {
  if (props.isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => setIsLoggedIn(true);
  const handleLogoutClick = () => setIsLoggedIn(false);

  let button = isLoggedIn ? (
    <LogoutButton onClick={handleLogoutClick} />
  ) : (
    <LoginButton onClick={handleLoginClick} />
  );

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
}

export default App;
