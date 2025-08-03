import logo from './logo.svg';
import './App.css';

import React, { useState } from "react";
import CurrencyConvertor from "./components/CurrencyConvertor";

function App() {
  const [count, setCount] = useState(5);

  // Increments the counter and says hello
  const handleIncrement = () => {
    increment();
    sayHello();
  };

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const sayHello = () => {
    alert("Hello Member!");
  };

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const handleClick = (e) => {
    alert("I was clicked");
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>{count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <br /><br />
      <button onClick={decrement}>Decrement</button>
      <br /><br />
      <button onClick={() => sayWelcome("welcome")}>Say welcome</button>
      <br /><br />
      <button onClick={handleClick}>Click on me</button>

      <hr />

      <CurrencyConvertor />
    </div>
  );
}

export default App;
