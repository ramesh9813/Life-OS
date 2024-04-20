import React, { useState } from 'react';

const Task = (props) => {
  const initialInputs = [...Array(10)].map((_, index) => ({ id: index, value: '' }));
  const [inputs, setInputs] = useState(initialInputs);

  // Function to handle key press events
  const handleKeyPress = (index, e) => {
    if (e.key === 'Enter'||e.keyCode == '40') {
      e.preventDefault(); // Prevent default behavior of Enter key
      
      // If the last input is filled, add a new input field
      if (index === inputs.length - 1 && inputs[index].value !== '') {
        setInputs([...inputs, { id: inputs.length, value: '' }]);
      }

      // Focus on the next input element if it exists
      const nextIndex = index +1;
      if (inputs[nextIndex]) {
        document.getElementById(`input-${nextIndex}`).focus();
      }
    }
  };

  // Function to handle input value changes
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
            <p className='d-flex align-bottom justify-content-center ms-5'>{index+1}. </p>
            <input
            key={input.id}
            type="text"
            className="underline ps-3"
            // placeholder={index+1}
            value={input.value}
            id={`input-${index}`}
            onChange={(e) => handleInputChange(index, e.target.value)} // Handle input value changes
            onKeyPress={(e) => handleKeyPress(index, e)} // Handle key press events
            />
            </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Task;
