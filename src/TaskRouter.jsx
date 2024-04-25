import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Layout from './Layout'; // Import the Layout component
import Login from './auth/Login';
import SignUp from './auth/Signup';
import App from './App';
import ForgotPassword from './auth/ForgotPassword';
import TaskDetail from './page/Taskdetail';
import TaskStatus from './page/TaskStatus';
import Layouts from './component/Layouts';
 
const TaskRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layouts/>}> {/* Use the Layout component here */}
          <Route index element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path='/taskdetail' element={<TaskDetail/>}/>
          <Route path='/forgetpassword' element={<ForgotPassword/>}/>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/taskstatus" element={<TaskStatus/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default TaskRouter;
