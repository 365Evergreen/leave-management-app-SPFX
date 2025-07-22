import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
import Request from '../pages/request/Request';
import History from '../pages/history/History';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/request" element={<Request />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
};

export default AppRoutes;