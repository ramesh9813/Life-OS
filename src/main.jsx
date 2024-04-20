import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import TaskRouter from './TaskRouter.jsx'
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App/> */}
    <TaskRouter/>
  </React.StrictMode>,
)
