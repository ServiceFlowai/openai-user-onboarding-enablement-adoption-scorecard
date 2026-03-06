import React from 'react';

const courses = [
  { id: 1, title: 'Account Setup', completed: true },
  { id: 2, title: 'Integration Basics', completed: false },
  { id: 3, title: 'Security & Governance', completed: false },
  { id: 4, title: 'Best Practices', completed: true }
];

function Courses() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Courses</h1>
      <ul className="space-y-4">
        {courses.map(course => (
          <li key={course.id} className="p-4 bg-white shadow rounded flex justify-between items-center">
            <span>{course.title}</span>
            <span className={`badge ${course.completed ? 'bg-green-500' : 'bg-red-500'} text-white px-2 py-1 rounded`}>{course.completed ? 'Completed' : 'Incomplete'}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;