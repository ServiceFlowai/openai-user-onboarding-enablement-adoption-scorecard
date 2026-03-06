import React from 'react';

const playbooks = [
  { title: 'CSM Onboarding Checklist', description: 'Ensure consistent onboarding execution.' },
  { title: 'Support Handoff Playbook', description: 'Guidelines for smooth handoffs between teams.' }
];

function Playbooks() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Success Checklists & Playbooks</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {playbooks.map((playbook) => (
          <div key={playbook.title} className="p-4 bg-white rounded shadow">
            <h2 className="font-semibold">{playbook.title}</h2>
            <p>{playbook.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Playbooks;