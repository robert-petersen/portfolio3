import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './views/HomeView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        {/* <Route path="/" element={<Hack />} exact /> */}
      </Routes>
  </Router>
  );
}

export default App;
