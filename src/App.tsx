// import React from 'react';
// import MainPage from './pages/MainPage';
// import { CssBaseline } from '@mui/material';

// const App = () => {
//   return (
//     <>
//       <CssBaseline />
//       <MainPage />
//     </>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AddProject from './pages/AddProject';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/addproject" element={<AddProject />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;