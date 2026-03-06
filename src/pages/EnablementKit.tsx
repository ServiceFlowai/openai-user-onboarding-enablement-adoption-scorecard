import React from 'react';

const enablementMaterials = [
  { id: 1, title: 'One-Pager', description: 'Overview of OpenAI products and benefits.' },
  { id: 2, title: 'Battlecard', description: 'Competitive analysis and positioning.' },
  { id: 3, title: 'Demo Script', description: 'Step-by-step guide for product demonstrations.' },
  { id: 4, title: 'ROI Calculator', description: 'Calculate potential ROI for using OpenAI products.' }
];

function EnablementKit() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Sales & CS Enablement Kit</h1>
      <ul className="space-y-4">
        {enablementMaterials.map(material => (
          <li key={material.id} className="p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold">{material.title}</h2>
            <p>{material.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EnablementKit;