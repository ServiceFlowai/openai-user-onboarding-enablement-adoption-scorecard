import React from 'react';

const ScoringModel = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Scoring Model</h1>
      <p>The scoring model is based on three key areas:</p>
      <ul className="list-disc pl-6">
        <li>Engagement: Activity levels and feature usage.</li>
        <li>Enablement: Completion of onboarding and training modules.</li>
        <li>Outcomes: Business impact and success metrics.</li>
      </ul>
      <p>Thresholds for health states:</p>
      <ul className="list-disc pl-6">
        <li>Green: Score > 80</li>
        <li>Amber: Score between 50 and 80</li>
        <li>Red: Score < 50</li>
      </ul>
    </div>
  );
};

export default ScoringModel;