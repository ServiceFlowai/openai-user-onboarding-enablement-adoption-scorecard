import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: 'Jan', adoption: 30 },
  { name: 'Feb', adoption: 45 },
  { name: 'Mar', adoption: 60 },
  { name: 'Apr', adoption: 70 },
  { name: 'May', adoption: 80 }
];

function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white shadow rounded">
          <h2 className="text-xl font-semibold">Adoption Rate</h2>
          <LineChart width={400} height={200} data={data}>
            <Line type="monotone" dataKey="adoption" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h2 className="text-xl font-semibold">Recent Activities</h2>
          <ul className="list-disc pl-5">
            <li>Completed 'Account Setup' course</li>
            <li>Started 'Integration Basics' lab</li>
            <li>Downloaded 'ROI Calculator'</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;