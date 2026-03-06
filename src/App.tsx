import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import DataPrivacy from './pages/DataPrivacy';
import AccessControl from './pages/AccessControl';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/data-privacy" element={<DataPrivacy />} />
        <Route path="/access-control" element={<AccessControl />} />
      </Routes>
    </div>
  );
}

export default App;