import React from 'react';

const labs = [
  { id: 1, title: 'Sandbox Environment Setup', description: 'Learn how to set up a sandbox environment for testing.' },
  { id: 2, title: 'API Integration Lab', description: 'Step-by-step guide to integrate OpenAI API.' },
  { id: 3, title: 'Security Practices', description: 'Implement security best practices in your applications.' }
];

function Labs() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Hands-on Labs</h1>
      <ul className="space-y-4">
        {labs.map(lab => (
          <li key={lab.id} className="p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold">{lab.title}</h2>
            <p>{lab.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Labs;