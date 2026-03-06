import React from 'react';

function HealthScoreAutomation() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Health Score Automation</h1>
      <p className="mb-4">Scheduled jobs compute health scores and push alerts to CSMs and dashboards.</p>
      <ul className="list-disc pl-5">
        <li>Health scores are calculated weekly.</li>
        <li>Alerts are sent to CSMs for accounts with declining scores.</li>
        <li>Dashboards are updated with the latest scores every Monday.</li>
      </ul>
    </div>
  );
}

export default HealthScoreAutomation;