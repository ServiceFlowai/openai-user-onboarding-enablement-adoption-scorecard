import React from 'react';

const MonthlyReport = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Monthly Report</h1>
      <p>This section will display the monthly adoption scorecard with detailed drilldowns for each account.</p>
      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-lg font-semibold">Account A</h2>
        <p>Adoption Rate: 75%</p>
        <p>Health Score: Green</p>
      </div>
      <div className="bg-white p-4 shadow rounded mt-4">
        <h2 className="text-lg font-semibold">Account B</h2>
        <p>Adoption Rate: 50%</p>
        <p>Health Score: Amber</p>
      </div>
    </div>
  );
};

export default MonthlyReport;