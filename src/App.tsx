import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CRMIntegration from './pages/CRMIntegration';
import HealthScoreAutomation from './pages/HealthScoreAutomation';
import NudgesEmails from './pages/NudgesEmails';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/crm-integration" element={<CRMIntegration />} />
        <Route path="/health-score" element={<HealthScoreAutomation />} />
        <Route path="/nudges-emails" element={<NudgesEmails />} />
      </Routes>
    </div>
  );
}

export default App;