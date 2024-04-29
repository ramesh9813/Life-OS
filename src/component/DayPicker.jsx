import React from 'react'
import { Link } from 'react-router-dom'

const DayPicker = () => {
  return (
    <>
    <div className=" container mt-3 btn-group d-flex justify-content-center" role="group" aria-label="Basic outlined example">
        <button type="button" className="btn btn-outline-primary">Before Yesterday</button>
        <button type="button" className="btn btn-outline-primary">Yesterday</button>
        <button type="button" className="btn btn-outline-primary" checked>Today</button>
        <button type="button" className="btn btn-outline-primary">Tommorow</button>
        <button type="button" className="btn btn-outline-primary">After Tommorow</button>
       <Link to='/task' className='ms-4'>
       <i className="bi bi-arrows-angle-expand"></i>
       </Link>
      </div>
    </>
  )
}

export default DayPicker