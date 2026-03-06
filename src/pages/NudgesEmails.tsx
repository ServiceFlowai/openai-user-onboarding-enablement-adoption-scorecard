import React from 'react';

function NudgesEmails() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">In-product Nudges and Emails</h1>
      <p className="mb-4">Automated emails and product messages triggered by score thresholds or onboarding milestones.</p>
      <ul className="list-disc pl-5">
        <li>Emails are sent when users reach key milestones.</li>
        <li>In-product messages are displayed for low engagement scores.</li>
        <li>Monthly summaries are emailed to account admins.</li>
      </ul>
    </div>
  );
}

export default NudgesEmails;