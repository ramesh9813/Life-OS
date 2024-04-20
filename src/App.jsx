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
      <Header/>
      <LeftSideBar/>
      <RightSideBar/>
      <DayPicker/>    
      <TaskList/>
      <Footer/>
    </>
  )
}

export default App
