import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Account A', score: 85 },
  { name: 'Account B', score: 70 },
  { name: 'Account C', score: 95 },
];

function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Total Accounts</h2>
          <p className="text-2xl">3</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Average Health Score</h2>
          <p className="text-2xl">83%</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Alerts Sent</h2>
          <p className="text-2xl">5</p>
        </div>
      </div>
      <BarChart width={600} height={300} data={data} className="mb-6">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="score" fill="#8884d8" />
      </BarChart>
      <div className="flex space-x-4">
        <Link to="/crm-integration" className="bg-blue-500 text-white px-4 py-2 rounded">CRM Integration</Link>
        <Link to="/health-score" className="bg-blue-500 text-white px-4 py-2 rounded">Health Score Automation</Link>
        <Link to="/nudges-emails" className="bg-blue-500 text-white px-4 py-2 rounded">Nudges & Emails</Link>
      </div>
    </div>
  );
}

export default Dashboard;