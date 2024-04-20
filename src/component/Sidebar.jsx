import React, { useState } from 'react';
import '../style/sidebar.css'; // Import your CSS file for styling

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        {isSidebarOpen ? '<' : '>'}
      </div>
      <div className="content">
        <div className="grid-container">
          <div className="grid-item bar-chart">Bar Chart</div>
          <div className="grid-item pie-chart">Pie Chart</div>
          <div className="grid-item report">Report</div>
          <div className="grid-item other">Other</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
