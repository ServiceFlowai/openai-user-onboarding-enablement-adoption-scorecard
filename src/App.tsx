import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Personas from './pages/Personas';
import Curriculum from './pages/Curriculum';
import Playbooks from './pages/Playbooks';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/personas" element={<Personas />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/playbooks" element={<Playbooks />} />
      </Routes>
    </div>
  );
}

export default App;