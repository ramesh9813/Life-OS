import React from 'react';

const BarChart = () => {
  // Sample data for 7 days
  const data = [12, 19, 3, 5, 2, 3, 10];

  // Calculate maximum value for scaling
  const max = Math.max(...data);

  return (
    <div>
      <h2>Bar Chart Example</h2>
      <div style={{ display: 'flex' }}>
        {data.map((value, index) => (
          <div key={index} style={{ marginRight: '10px' }}>
            <div style={{ width: '30px', height: `${(value / max) * 100}px`, backgroundColor: 'blue', textAlign: 'center' }}>
              <span>{value}</span>
            </div>
            <div style={{ textAlign: 'center' }}>Day {index + 1}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
