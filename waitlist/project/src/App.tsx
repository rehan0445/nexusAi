import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WaitlistPage from './pages/WaitlistPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/waitlist" element={<WaitlistPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;