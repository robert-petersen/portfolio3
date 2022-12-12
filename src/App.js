import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DefaultView from './views/DefaultView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultView />} exact />
        {/* <Route path="/" element={<Hack />} exact /> */}
      </Routes>
  </Router>
  );
}

export default App;
