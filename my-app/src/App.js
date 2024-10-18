import React, { useState, useEffect } from 'react';

import './App.css';
// import Dashboard  from './Components/Dashboard';
// import Greeting  from './Components/Greeting';
// import InlineCss  from './Components/InlineCss';

// import ExternalCss from './Components/ExternalCss';

// import Counter from './Components/Counter';


// import UseState from './Components/UseState';
// import UseEffect  from './Components/UseEffect';

// import ThemeSwitch from './Components/ThemeSwitch';
// import UseCallback from './Components/UseCallback';
// import UseMemo  from './Components/UseMemo';

// import UseReducer from './Components/UseReducer';

import FormHandling from './Components/Forms/FormsHandling';





function App(){
    return(
        <div className="App">


   <FormHandling/>



  
         

          



        </div>
    );
}





// // function App() {
// //   const [currentDateTime, setCurrentDateTime] = useState(new Date());

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setCurrentDateTime(new Date());
// //     }, 1000);

// //     return () => clearInterval(timer);
// //   }, []);

// //   return (
// //     <div className="App">
// //       <header className="App-header">
      
// //         <h1>Current Date and Time</h1>
// //         <p>{currentDateTime.toLocaleString()}</p>
// //       </header>
// //     </div>
// //   );
// // }

 export default App;





// import React from "react";
// import ComponentA from "./Components/ComponentA";

// const StudentContext = React.createContext();
// const MarkContext = React.createContext();

// const App = () => {
//   return (
//     <>
      
//       <StudentContext.Provider value={'nilesh'}>
//         <MarkContext.Provider value={96}>
//           <ComponentA />
//         </MarkContext.Provider>
//       </StudentContext.Provider>
//     </>
//   );
// };

// export default App;
// export { StudentContext, MarkContext };
