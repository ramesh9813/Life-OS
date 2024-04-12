import './App.css'
import TaskList from './component/TaskList'


function App() {
 
  return (
    <>
     <div className="container">
     <h2 className='d-flex justify-content-center'>Today Task</h2>
      <TaskList/>
     </div>
    </>
  )
}

export default App
