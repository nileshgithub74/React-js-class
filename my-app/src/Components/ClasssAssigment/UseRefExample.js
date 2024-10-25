import React, { useEffect, useRef, useState } from 'react';

const UseRefExample = () => {
  const [inputvalue, setInputValue] = useState(0);
  const count = useRef(0); 

  useEffect(() => {
    count.current = count.current + 1;
  });

  const handleChange = (e) => {
    setInputValue(e.target.value); 
  };

  return (
    <>
      <input 
        type="text" 
        value={inputvalue} 
        onChange={handleChange} 
        placeholder="Enter some text" 
      />
      
      <h2>Render Count: {count.current}</h2> 
    </>
  );
};

export default UseRefExample;
