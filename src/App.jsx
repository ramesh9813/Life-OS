import './App.css'
import DayPicker from './component/DayPicker'
import Header from './component/Header'
import LeftSideBar from './component/LeftSideBar'
import RightSideBar from './component/RightSideBar'
import TaskList from './component/TaskList'


function App() {
 
  return (
    <>
     <div className="container mt-5 w-100">
      <Header/>
      <LeftSideBar/>
      <RightSideBar/>
      <DayPicker/>    
      <TaskList/>
     </div>
    </>
  )
}

export default App
