import React from 'react'

const DayPicker = () => {
  return (
    <>
    <div class="btn-group d-flex justify-content-center" role="group" aria-label="Basic outlined example">
        <button type="button" class="btn btn-outline-primary">Yesterday</button>
        <button type="button" class="btn btn-outline-primary" checked>Today</button>
        <button type="button" class="btn btn-outline-primary">Tommorow</button>
      </div>
    </>
  )
}

export default DayPicker