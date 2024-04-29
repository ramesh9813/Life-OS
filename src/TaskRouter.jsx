import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './auth/Login';
import SignUp from './auth/Signup';
import App from './App';
import ForgotPassword from './auth/ForgotPassword';
import TaskDetail from './page/Taskdetail';
import TaskStatus from './page/TaskStatus';
import Layouts from './component/Layouts';
import TaskList from './component/TaskList';
import Pricing from './component/Pricing';
 
const TaskRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/task' element={<TaskList/>}/>
        <Route path='/' element={<Layouts/>}>  
          <Route index element={<App />} />
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/taskdetail' element={<TaskDetail/>}/>
          <Route path="/taskstatus" element={<TaskStatus/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/forgetpassword' element={<ForgotPassword/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default TaskRouter;
