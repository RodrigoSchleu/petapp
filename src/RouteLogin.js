import './App.css';

import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './views/login';
import Register from './views/register';

function RouteLogin() {
  return (
      <Routes>
        <Route>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
  );
}

export default RouteLogin;