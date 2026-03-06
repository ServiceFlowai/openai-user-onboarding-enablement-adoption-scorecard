import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AdoptionMetrics from './pages/AdoptionMetrics';
import ScoringModel from './pages/ScoringModel';
import MonthlyReport from './pages/MonthlyReport';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/adoption-metrics" element={<AdoptionMetrics />} />
        <Route path="/scoring-model" element={<ScoringModel />} />
        <Route path="/monthly-report" element={<MonthlyReport />} />
      </Routes>
    </div>
  );
}

export default App;