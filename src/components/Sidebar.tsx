import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Book, FlaskConical, Briefcase } from 'lucide-react';

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-xl font-bold">OpenAI Scorecard</div>
      <nav className="flex-1">
        <Link to="/" className="flex items-center p-4 hover:bg-gray-700">
          <Home className="mr-2" /> Dashboard
        </Link>
        <Link to="/courses" className="flex items-center p-4 hover:bg-gray-700">
          <Book className="mr-2" /> Courses
        </Link>
        <Link to="/labs" className="flex items-center p-4 hover:bg-gray-700">
          <FlaskConical className="mr-2" /> Labs
        </Link>
        <Link to="/enablement-kit" className="flex items-center p-4 hover:bg-gray-700">
          <Briefcase className="mr-2" /> Enablement Kit
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;