import React from 'react';

const AdoptionMetrics = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Adoption Metrics</h1>
      <ul className="list-disc pl-6">
        <li>Adoption Rate: Percentage of users actively using the product.</li>
        <li>DAU/MAU: Daily and Monthly Active Users.</li>
        <li>Feature Usage: Frequency of feature utilization.</li>
        <li>Completion Rate: Percentage of users completing onboarding.</li>
        <li>Time-to-First-Value: Time taken to achieve initial value.</li>
        <li>NPS: Net Promoter Score.</li>
        <li>Support Volume: Number of support tickets raised.</li>
      </ul>
    </div>
  );
};

export default AdoptionMetrics;