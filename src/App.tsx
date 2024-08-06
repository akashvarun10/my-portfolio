import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import MainPage from './pages/MainPage';
import AddProject from './pages/AddProject';

// Initialize Google Analytics
ReactGA.initialize(import.meta.env.VITE_ANALYTICS_ID); 

const TrackPageView: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <TrackPageView />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/addproject" element={<AddProject />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
