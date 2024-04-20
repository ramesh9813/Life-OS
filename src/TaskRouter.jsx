import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './auth/Login';
import SignUp from './auth/Signup';
import App from './App';
import ForgotPassword from './auth/ForgotPassword';
import TaskDetail from './page/Taskdetail';
 
const TaskRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path='/taskdetail' element={<TaskDetail/>}/>
        <Route path='/forgetpassword' element={<ForgotPassword/>}/>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default TaskRouter;
