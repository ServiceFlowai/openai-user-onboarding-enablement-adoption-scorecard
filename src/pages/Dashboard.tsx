import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link to="/personas" className="block p-4 bg-white rounded shadow hover:bg-gray-50">
          <h2 className="font-semibold">Personas</h2>
          <p>Define and explore user personas.</p>
        </Link>
        <Link to="/curriculum" className="block p-4 bg-white rounded shadow hover:bg-gray-50">
          <h2 className="font-semibold">Curriculum</h2>
          <p>Explore onboarding modules.</p>
        </Link>
        <Link to="/playbooks" className="block p-4 bg-white rounded shadow hover:bg-gray-50">
          <h2 className="font-semibold">Playbooks</h2>
          <p>Access operational playbooks.</p>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;