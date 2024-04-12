import React, { useRef } from 'react';

const Task = () => {
  const inputsRef = useRef([]);  
 
  const handleKeyPress = (index, e) => {
    if (e.key === 'Enter') {
      e.preventDefault();  

      if (inputsRef.current[index + 1]) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  return (
    <>
      <div className="input_class">
        {[...Array(9)].map((_, index) => (
          <input
            key={index}
            type="text"
            className="underline"
            onKeyPress={(e) => handleKeyPress(index, e)} // Handle key press events
            ref={(el) => (inputsRef.current[index] = el)} // Store reference to the input element
          />
        ))}
      </div>
    </>
  );
};

export default Task;
