import React from 'react';

function AccessControl() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Access Control</h1>
      <p>Role-based access to reporting and sensitive data is implemented to ensure security.</p>
      <ul className="list-disc pl-6">
        <li>Admin: Full access to all data and settings.</li>
        <li>Developer: Access to integration and usage data.</li>
        <li>Citizen User: Access to personal usage data.</li>
        <li>Executive: Access to high-level reports and analytics.</li>
      </ul>
    </div>
  );
}

export default AccessControl;