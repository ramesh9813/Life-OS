import React from 'react'

const DayPicker = () => {
  return (
    <>
    <div class=" container mt-3 btn-group d-flex justify-content-center" role="group" aria-label="Basic outlined example">
        <button type="button" class="btn btn-outline-primary">Before Yesterday</button>
        <button type="button" class="btn btn-outline-primary">Yesterday</button>
        <button type="button" class="btn btn-outline-primary" checked>Today</button>
        <button type="button" class="btn btn-outline-primary">Tommorow</button>
        <button type="button" class="btn btn-outline-primary">After Tommorow</button>
      </div>
    </>
  )
}

export default DayPicker