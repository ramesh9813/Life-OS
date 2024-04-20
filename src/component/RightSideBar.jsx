import React, { useState } from 'react';
import '../style/rightsidebar.css'

const RightSideBar = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };

  return (
    <div className={`sidebar ${isVisible ? 'open' : ''}`}>
      <div className="toggle-button" onClick={toggleVisibility}>
            {isVisible ? '❌' : '⬅️'}
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

export default RightSideBar;
