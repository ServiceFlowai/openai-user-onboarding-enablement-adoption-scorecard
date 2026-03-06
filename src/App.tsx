import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Labs from './pages/Labs';
import EnablementKit from './pages/EnablementKit';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/enablement-kit" element={<EnablementKit />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;