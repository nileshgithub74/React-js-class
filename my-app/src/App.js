



import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './Components/Router/Home';
import About from './Components/Router/About';
import Contact from './Components/Router/Contact';

const App = () => {
  return (
    <Router>
      <div><Link to="/home?name=Nilesh">Home</Link></div>
      <div><Link to="/about?section=React">About</Link></div>
      <div><Link to="/contact?method= email">Contact</Link></div>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;


