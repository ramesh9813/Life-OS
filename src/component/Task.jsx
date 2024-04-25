import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/task.css'

const Task = (props) => {
  const initialInputs = [...Array(10)].map((_, index) => ({ id: index, value: '' }));
  const [inputs, setInputs] = useState(initialInputs);

  useEffect(()=>{
    const fe

  })

  const handleKeyPress = (index, e) => {
    if (e.key === 'Enter'||e.keyCode == '40') {
      e.preventDefault(); 
      if (index === inputs.length - 1 && inputs[index].value !== '') {
        setInputs([...inputs, { id: inputs.length, value: '' }]);
      }

     
      const nextIndex = index +1;
      if (inputs[nextIndex]) {
        document.getElementById(`input-${nextIndex}`).focus();
      }
    }
  };

 
  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index].value = value;
    setInputs(newInputs);
  };

  return (
    <>
     <div className="left-container m-3 border">
      <h3 className='d-flex justify-content-center'>{props.value}</h3>
      <hr />
      <div className="input_class">
        {inputs.map((input, index) => (
            <div className='d-flex'>
            <div className="task-number">
              <p className=' task-input-count'>{index+1}. </p>
            </div>
            <input
                  key={input.id}
                  type="text"
                  className="underline ps-3"
                 
                  value={input.value}
                  id={`input-${index}`}
                  onChange={(e) => handleInputChange(index, e.target.value)} // Handle input value changes
                  onKeyPress={(e) => handleKeyPress(index, e)} // Handle key press events
            />
            <Link to="/taskdetail" className='expand-btn'><i className="bi bi-arrows-fullscreen me-3 "></i></Link>
            
            </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Task;
