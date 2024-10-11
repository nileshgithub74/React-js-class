import React from "react";
 const Child =   React.memo(({  incrementCounter, decrementCounter , incrementNumber ,decrementNumber}) =>{
  console.log("Child Component Rendered");


   return (
    <div>
      <button onClick={incrementCounter}>Increase Counter</button>
      <button onClick={decrementCounter}>Decrease Counter</button>
      <button onClick={incrementNumber}>Increase Number</button>
      <button onClick={decrementNumber}>decrease Number</button>
    </div>
   );



 });

 export default Child;
