import React from 'react';

function CRMIntegration() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">CRM and LMS Integration</h1>
      <p className="mb-4">Sync completion status, course progress, and engagement data between Salesforce and LMS.</p>
      <ul className="list-disc pl-5">
        <li>Completion status is updated in real-time.</li>
        <li>Course progress is synced every hour.</li>
        <li>Engagement data is aggregated daily.</li>
      </ul>
    </div>
  );
}

export default CRMIntegration;