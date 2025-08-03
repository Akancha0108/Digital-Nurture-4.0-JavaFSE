import React, { useState } from "react";

function CurrencyConvertor() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const conversionRate = 80;
    const convertedAmount = parseFloat(amount) * conversionRate;

    alert(`Converting to ${currency} Amount is ${convertedAmount}`);
  };

  return (
    <div style={{ marginTop: 30 }}>
      <h1 style={{ color: "green" }}>Currency Convertor!!!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount: </label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Currency: </label>
          <textarea
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CurrencyConvertor;
