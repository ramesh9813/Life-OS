import React, { useState } from 'react';
import '../style/rightsidebar.css'
import BarChart from './BarChart';
// import PieChart from './PieChart';

const RightSideBar = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };

  return (
    <div className={`sidebar ${isVisible ? 'open' : ''}`}>
      <div className="toggle-button" onClick={toggleVisibility}>
            {isVisible ? <i className="bi bi-arrow-bar-right h3"></i> : <i className="bi bi-arrow-bar-left h3"></i>}
        </div>
      <div className="content">
        <div className="grid-container">
        <div className="grid-item report">Report</div>
          <div className="grid-item other">Other</div>
          <div className="grid-item bar-chart">
            <BarChart/>
          </div>
          <div className="grid-item pie-chart">
            {/* <PieChart/> */}
          </div>
          
        </div>
      </div>
      
    </div>
  );
};

export default RightSideBar;
