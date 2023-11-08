import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting_Message';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  </Router>
);

export default App;
