import React from 'react';

const personas = [
  { name: 'Admin', description: 'Responsible for account setup and management.' },
  { name: 'Developer', description: 'Focuses on integration and development tasks.' },
  { name: 'Citizen User', description: 'Utilizes applications without deep technical involvement.' },
  { name: 'Executive', description: 'Oversees adoption and business impact.' }
];

function Personas() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Personas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {personas.map((persona) => (
          <div key={persona.name} className="p-4 bg-white rounded shadow">
            <h2 className="font-semibold">{persona.name}</h2>
            <p>{persona.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Personas;