import './App.css';

import * as React from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import EditProfile from './components/EditProfile';
import Navbar from './components/nav';
import Servico from './components/Servico';
import EditPetProfile from './components/EditPetProfile';
import Main from './components/Main';
import Profile from './components/Profile';
import Sidebar from './components/sidebar/Sidebar';

function RouteUser() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
      <div className="container">
        <Navbar sidebarOpen={openSidebar} openSidebar={openSidebar}/>
        <Routes>
          <Route>
            <Route path="/" element={<Main />} />
            <Route path="profile" element={<Profile />}/>
            <Route path="profile/editProfile" element={<EditProfile />}/>
            <Route path="profilePet" element={<Main/>} />
            <Route path="service" element={<Servico/>} />
            <Route path="profilePet" element={<EditPetProfile/>} />
            <Route path="profilePet/editPetProfile" element={<EditPetProfile/>} />
            <Route path="profilePetCaretaker" element={<EditProfile />} />
            <Route path="contract" element={<EditProfile />} />
            <Route path="profilePet" element={<Main/>} />
            <Route path="historic" element={<EditProfile />} />
          </Route>
        </Routes>
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
      </div>
  );
}

export default RouteUser;