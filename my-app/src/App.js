import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
// import Dashboard  from './Components/Dashboard';
// import Greeting  from './Components/Greeting';
// import InlineCss  from './Components/InlineCss';

// import ExternalCss from './Components/ExternalCss';

// import Counter from './Components/Counter';


import UseState from './Components/UseState';
import UseEffect  from './Components/UseEffect';



function App(){
    return(
        <div className="App">
            {/* <Dashboard name= "Nilesh kumar" />
            <Greeting   name= " Nilesh"/> */}

            {/* <InlineCss/> */}
                    {/* <Counter/> */}
            {/* <ExternalCss/> */}

        {/* <UseState/> */}
        <UseEffect/>


        </div>
    );
}





// function App() {
//   const [currentDateTime, setCurrentDateTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentDateTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
      
//         <h1>Current Date and Time</h1>
//         <p>{currentDateTime.toLocaleString()}</p>
//       </header>
//     </div>
//   );
// }

 export default App;


