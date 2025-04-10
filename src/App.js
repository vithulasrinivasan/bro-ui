import React, { useState } from 'react';
import RouteForm from './components/Routeform';
import './App.css';

const initialRoutes = [
  { name: 'Route 41', stops: ['Tambaram', 'Guindy', 'SSN'] },
  { name: 'Route 42A', stops: ['Adyar', 'Thiruvanmiyur', 'SSN'] },
  { name: 'Route 45C', stops: ['Anna Nagar', 'Koyambedu', 'SSN'] },
];

export default function App() {
  const [routes, setRoutes] = useState(initialRoutes);
  const [optimizedRoutes, setOptimizedRoutes] = useState([]);
  const [showOptimized, setShowOptimized] = useState(false);

  const handleOptimize = (studentData, dayType) => {
    // Simulated optimization logic
    const merged = [
      { name: 'Merged Route A', stops: ['Tambaram', 'Guindy', 'Adyar', 'SSN'] },
      { name: 'Merged Route B', stops: ['Anna Nagar', 'Koyambedu', 'Thiruvanmiyur', 'SSN'] }
    ];
    setOptimizedRoutes(merged);
    setShowOptimized(true);
  };

  return (
    <div className="App">
      <div className="overlay">
        <h1 className="title">Bus Route Optimizer</h1>
        <RouteForm onOptimize={handleOptimize} />

        <button className="toggle-btn" onClick={() => setShowOptimized(!showOptimized)}>
          {showOptimized ? '🔁 Show Original Routes' : '⚡ Show Optimized Routes'}
        </button>

        <div className="route-section">
          <h2>{showOptimized ? 'Optimized Routes' : '🕒 Existing Routes'}</h2>
          <div className="route-list">
            {(showOptimized ? optimizedRoutes : routes).map((route, idx) => (
              <div className="route-card" key={idx}>
                <h3>{route.name}</h3>
                <p>Stops: {route.stops.join(' → ')}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
