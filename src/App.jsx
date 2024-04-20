import './App.css'
import Header from './component/Header'
import HiddenComponent from './component/HiddenComponent'
import Sidebar from './component/Sidebar'
// import Header from './component/Header'
import TaskList from './component/TaskList'


function App() {
 
  return (
    <>
     <div className="container mt-5 w-100
     ">
      {/* <Header/> */}
      <Sidebar/>
      <Header/>
      <div class="btn-group d-flex justify-content-center" role="group" aria-label="Basic outlined example">
        <button type="button" class="btn btn-outline-primary">Yesterday</button>
        <button type="button" class="btn btn-outline-primary" checked>Today</button>
        <button type="button" class="btn btn-outline-primary">Tommorow</button>
      </div>
      <HiddenComponent/>
      <TaskList/>
     </div>
    </>
  )
}

export default App
