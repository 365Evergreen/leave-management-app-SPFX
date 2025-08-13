import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
import Request from '../pages/request/Request';
import History from '../pages/history/History';
import { SPFI } from "@pnp/sp";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/request" element={<Request sp={new SPFI} />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
};

export default AppRoutes;