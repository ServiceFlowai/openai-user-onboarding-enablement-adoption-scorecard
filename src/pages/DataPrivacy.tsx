import React from 'react';

function DataPrivacy() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Data Handling & Privacy</h1>
      <p>We define account data used for scoring with consent and minimization controls.</p>
      <ul className="list-disc pl-6">
        <li>Account Setup Data</li>
        <li>Integration Usage Metrics</li>
        <li>Security & Governance Compliance</li>
        <li>Feature Adoption Rates</li>
      </ul>
      <h2 className="text-xl mt-4">Consent and Minimization</h2>
      <p>Users must consent to data usage, and data collection is minimized to essential metrics only.</p>
    </div>
  );
}

export default DataPrivacy;