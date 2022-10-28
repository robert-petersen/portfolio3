import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeView from "./homeView/HomeView.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeView />} />
        {/* <Route path="/" element={Hack} exact /> */}
      </Routes>
  </Router>
  );
}

export default App;
