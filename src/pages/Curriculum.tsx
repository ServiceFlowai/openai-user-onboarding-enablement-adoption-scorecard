import React from 'react';

const modules = [
  { title: 'Account Setup', description: 'Learn how to set up your account.' },
  { title: 'Integration Basics', description: 'Understand the basics of integrating with our platform.' },
  { title: 'Security & Governance', description: 'Best practices for security and governance.' },
  { title: 'Best Practices', description: 'Learn the best practices for using our products.' }
];

function Curriculum() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Onboarding Curriculum</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {modules.map((module) => (
          <div key={module.title} className="p-4 bg-white rounded shadow">
            <h2 className="font-semibold">{module.title}</h2>
            <p>{module.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Curriculum;