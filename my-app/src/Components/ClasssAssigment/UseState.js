// import React, { useState } from 'react';

// const UseState = () => {
//   const initialCount = 0;
//   const [count, setCount] = useState(initialCount);

//   const incrementCount = () => {
//     setCount(prevCount => prevCount + 1);
//   };

//   const decrementCount = () => {
//     setCount(prevCount => prevCount - 1);
//   };

//   return (
//     <>
//       <h1>Count: {count}</h1>
//       <button onClick={incrementCount}>Increment</button>
//       <button onClick={decrementCount}>Decrement</button>
//     </>
//   );
// };

// export default UseState;



import React, { useState } from 'react';

const UseState = () => {
  const [student, setStudent] = useState({
    name: "Nilesh",
    age: 20,
    id: 12218065,
    cgpa: 8.0 // Example additional property
  });

  const increaseCgpa = () => {
    setStudent(prevState => {
      if (prevState.cgpa < 10) {
        return {
          ...prevState,
          cgpa: prevState.cgpa + 0.5 // Increment CGPA by 0.5
        };
      } else {
        return prevState; // No update if CGPA is already 10 or more
      }
    });
  };

  const decreaseCgpa = () => {
    setStudent(prevState => {
      if (prevState.cgpa > 0) {
        return {
          ...prevState,
          cgpa: prevState.cgpa - 0.5 // Decrement CGPA by 0.5
        };
      } else {
        return prevState; // No update if CGPA is already 0 or less
      }
    });
  };

  return (
    <>
      <h1>
        My name is {student.name}, age is {student.age}, and CGPA is {student.cgpa}
      </h1>
      <button onClick={increaseCgpa}>Increase CGPA</button>
      <button onClick={decreaseCgpa}>Decrease CGPA</button>
    </>
  );
};

export default UseState;
  