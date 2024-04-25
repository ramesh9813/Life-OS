import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/taskdetail.css';
import Tag from './Tag';

const TaskDetail = () => {
  const [notifyToMe, setNotifyToMe] = useState(false);
  const [reportEmail, setReportEmail] = useState('');
  const predefinedTags = ["Work", "Personal", "Home"];

  const handleNotifyToMeChange = (e) => {
    setNotifyToMe(e.target.checked);
  };

  const handleReportEmailChange = (e) => {
    setReportEmail(e.target.value);
  };

  return (
    <div className="task-detail">
      <div className="task-row">
        <Link to='/'>
        <i class="bi bi-arrows-angle-contract"></i>
        </Link>
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

        <Tag predefinedTags={predefinedTags}/>

      </div>
      <div className="completation-time">
        <label htmlFor="time-detial">Completion Time:</label>
        <select id="time-detial">
            <option value="fixed-time"> Fixed Time</option>
            <option value="period-of-time"> Period Time</option>
            <option value="with-in"> With in </option>
        </select>
        </div>
    </div>
  );
};

export default TaskDetail;
