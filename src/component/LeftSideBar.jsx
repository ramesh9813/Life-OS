import React, { useState } from 'react';
 
import '../style/leftsidebar.css'

const LeftSideBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
   const year = [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028]
   const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
   const days = Array.from({length: 30}, (_, index) => index + 1);
 
  return (
    <div className="datepicker">
        <div className={`hidden-component ${isVisible ? 'visible' : ''}`}>
        <div className="toggle-arrow" onClick={toggleVisibility}>
            {isVisible ? <i class="bi bi-arrow-bar-left h3"></i> : <i class="bi bi-arrow-bar-right h3"></i>}
        </div>
        <div className="content">
            {/* Your content goes here */}
           <h3>Pick Date</h3>
            <hr />
            <div className="datepicker">
            <div className="row">
            <div className="col year">
                <div className="scrollable-content">
                <h4>Year</h4>
                {year.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
                </div>
            </div>
            <div className="col month">
                <div className="scrollable-content">
                <h4>Month</h4>
                {months.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
                </div>
            </div>
            <div className="col days">
                <div className="scrollable-content">
                <h4>Days</h4>
                {days.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
                </div>
            </div>
            </div>

            </div>
        </div>
        </div>
        </div>
  );
};

export default LeftSideBar;
