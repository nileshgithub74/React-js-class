import React, { useState, useCallback } from "react";
import Child from "./Child.js";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const incrementCounter = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrementCounter = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  const incrementNumber = useCallback(() => {
    setNumber((prevNumber) => prevNumber + 1);
  }, []);

  const decrementNumber = useCallback(() => {
    setNumber((prevNumber) => prevNumber - 1);
  }, []);




  console.log("Componenet Render");
  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Number: {number}</h1>

      <Child
        incrementCounter={incrementCounter}
        decrementCounter={decrementCounter}
        incrementNumber={incrementNumber}
        decrementNumber={decrementNumber}
      />
    </div>
  );
};

export default UseCallback;




// useMemo : return  some value
