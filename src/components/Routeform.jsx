import React, { useState } from 'react';
import './Routeform.css';

export default function RouteForm({ onOptimize }) {
  const [file, setFile] = useState(null);
  const [dayType, setDayType] = useState('Weekday');

  const handleSubmit = (e) => {
    e.preventDefault();
    onOptimize(file, dayType);
  };

  return (
    <form className="route-form" onSubmit={handleSubmit}>
      <input type="file" accept=".csv" onChange={(e) => setFile(e.target.files[0])} />
      <select value={dayType} onChange={(e) => setDayType(e.target.value)}>
        <option>Weekday</option>
        <option>Weekend</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}
