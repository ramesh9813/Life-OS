import React, { useState } from 'react';
import '../style/taskdetail.css';

const TaskDetail = () => {
  const [notifyToMe, setNotifyToMe] = useState(false);
  const [reportEmail, setReportEmail] = useState('');

  const handleNotifyToMeChange = (e) => {
    setNotifyToMe(e.target.checked);
  };

  const handleReportEmailChange = (e) => {
    setReportEmail(e.target.value);
  };

  return (
    <div className="task-detail">
      <div className="task-row">
        <label htmlFor="task-title">Task Title:</label>
        <input type="text" id="task-title" placeholder="Enter task title" />
      </div>
      <div className="task-row">
        <label htmlFor="task-description">Task Description:</label>
        <textarea id="task-description" rows="4" placeholder="Enter task description"></textarea>
      </div>
      <div className="task-row">
        <label htmlFor="task-attachment">Attachment:</label>
        <input type="file" id="task-attachment" />
      </div>
      <div className="task-row d-flex">
      <div className="task-detail-item">
          <label htmlFor="status">Status:</label>
          <select id="statu  ">
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="task-detail-item ms-2">
          <input type="checkbox" id="email-me" checked={notifyToMe} onChange={handleNotifyToMeChange} />
          <label htmlFor="email-me">Email to me</label>
        </div>
        {notifyToMe && (
          <div className="task-detail-item ms-2">
            <input type="time" id="report-to" />
          </div>
        )}
      </div>
      <div className="task-detail-item">
        <label htmlFor="status">Completion Time:</label>
        <select id="status">
            <option value="pending"> Fixed Time</option>
            <option value="in-progress"> Period Time</option>
            <option value="completed"> With in </option>
        </select>
        </div>
    </div>
  );
};

export default TaskDetail;
