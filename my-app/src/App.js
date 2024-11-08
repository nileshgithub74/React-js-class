
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// import Home from './Components/Router/Home';
// import About from './Components/Router/About';
// import Contact from './Components/Router/Contact';
// import Todos from './Components/Router/Todos';

// const App = () => {
//   return (
//     <Router>
//       <div><Link to="/home?name=Nilesh">Home</Link></div>
//       <div><Link to="/about?section=React">About</Link></div>
//       <div><Link to="/contact?method= email">Contact</Link></div>
//       <div><Link to="/todos?method= email">Todos</Link></div>

//       <Routes>
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/todos" element={<Todos />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;






import React from 'react'
import ToggleButton from './ToggleButton'
import ReduxCounter from './ReduxCounter'

const App = () => {
  return (
    <>
   <ReduxCounter/>
    
    
    
    </>
  )
}

export default App