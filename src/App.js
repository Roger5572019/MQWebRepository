import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import About from "./views/About";
import OpenChat from "./views/OpenChat";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/openchat" element={<OpenChat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
