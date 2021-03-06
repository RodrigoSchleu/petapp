import './App.css';

import * as React from 'react';
import { useState } from 'react';
import { Route, Routes,useParams  } from 'react-router-dom';

import EditPetProfile from './components/EditPetProfile';
import EditProfile from './components/EditProfile';
import Main from './components/main';
import Navbar from './components/nav';
import PetProfile from './components/PetProfile';
import Profile from './components/Profile';
import Servico from './components/Servico';
import ServicoContratado from './components/ServicoContratado';
import PetService from './components/PetService';
import CreatePet from './components/CreatePet';

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

            <Route path="profilePet" element={<PetProfile/>} />
            <Route path="profilePet/editPetProfile" element={<EditPetProfile/>} />
            <Route path="profilePet/newPet" element={<CreatePet/>} />
            <Route path="profilePet/petService" element={<PetService/>} />

            <Route path="profilePet/petService/service" element={<Servico/>} />
            <Route path="contract" element={<ServicoContratado />} />

            <Route path="historic" element={<EditProfile />} />
          </Route>
        </Routes>
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
      </div>
  );
}

export default RouteUser;