import './App.css'
import DayPicker from './component/DayPicker'
import Footer from './component/Footer'
import Header from './component/Header'
import LeftSideBar from './component/LeftSideBar'
import RightSideBar from './component/RightSideBar'
import TaskList from './component/TaskList'


function App() {
 
  return (
    <>
      <LeftSideBar/>
      <RightSideBar/>
      <DayPicker/>    
      <TaskList/>
    </>
  )
}

export default App
