import React from 'react'
import Task from './Task'

const TaskList = () => {
  return (
    <>
    <div className="d-flex justify-content-center day-task-wrapper">
    <Task value="Planned task"/>
    <Task value="Performed task "/>
    </div>
    </>
  )
}

export default TaskList