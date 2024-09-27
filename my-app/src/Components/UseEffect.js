
// import React, { useState, useEffect } from "react";

// const UseEffect = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCount((prevCount) => prevCount + 1);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []); 

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//     </div>
//   );
// };

// export default UseEffect;



// import React, { useState, useEffect } from "react";

// const UseEffect = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCount((prevCount) => prevCount + 1);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const increment = () => {
//     setCount((prevCount) => prevCount + 1);
//   };

//   const decrement = () => {
//     setCount((prevCount) => prevCount - 1);
//   };

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// };

// export default UseEffect;


import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 10) {
      alert("Counter has reached 10!");
    }
  }, [count]); 

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default UseEffect;
