import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Account A', adoptionRate: 75 },
  { name: 'Account B', adoptionRate: 50 },
  { name: 'Account C', adoptionRate: 90 },
];

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Adoption Rate</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="adoptionRate" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Recent Activity</h2>
          <ul>
            <li>Account A completed onboarding</li>
            <li>Account B started integration</li>
            <li>Account C achieved 90% adoption</li>
          </ul>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Quick Actions</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Generate Report</button>
        </div>
      </div>
      <Link to="/adoption-metrics" className="text-blue-500">View Adoption Metrics</Link>
    </div>
  );
};

export default Dashboard;