import React from 'react';
import '../style/taskstatus.css';

const TaskStatus = () => {
  return (
    <div className="task-status">
      <div className="status-grid">
        <div className="status-item" id="status-item-1-1"> </div>
        <div className="status-item" id="status-item-1-2">E1:30</div>
        <div className="status-item  " id="status-item-1-3">hel</div>
        <div className="status-item" id="status-item-2-1"></div>
        <div className="status-item" id="status-item-2-2">hell</div>
        <div className="status-item" id="status-item-2-3">W2:30</div>
        <div className="status-item merged" id="status-item-3-1">hello12</div>
        <div className="status-item merged" id="status-item-3-2">hello123</div>
        <div className="status-item merged" id="status-item-3-3">hello1234</div>
      </div>
    </div>
  );
};

export default TaskStatus;
