import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './views/Home';
import About from './views/About';

function App() {
  return (
    <div className="">
       <Router>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
