// import React from 'react'


// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// import Home from './Components/Router/Home';
// import About from './Components/Router/About';
// import Contact from './Components/Router/Contact';

// const App = () => {
//   return (
//     <>

//     <Router>
//        <div><Link to='../src/Components/Router/Home.js'>Home </Link></div>
//        <div><Link to='../src/Components/Router/About.js'>About </Link></div>
//        <div><Link to='../src/Components/Router/Contact.js'>Contact</Link></div>

//        <Routes>
//           <Route path="../src/Components/Router/Home.js" element={<Home/>}/>
//           <Route path="../src/Components/Router/About.js" element={<About/>}/>
//           <Route path="../src/Components/Router/Contact.js" element={<Contact/>}/>
//        </Routes>
//     </Router>
    
    
    
//     </>
//   )
// }

// export default App






import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './Components/Router/Home';
import About from './Components/Router/About';
import Contact from './Components/Router/Contact';

const App = () => {
  return (
    <Router>
      <div><Link to="/home">Home</Link></div>
      <div><Link to="/about">About</Link></div>
      <div><Link to="/contact">Contact</Link></div>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
