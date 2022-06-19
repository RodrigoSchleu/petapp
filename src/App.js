import './App.css';

import * as React from 'react';
import { useState } from 'react';

import RouteLogin from './RouteLogin';
import RouteUser from './RouteUser';

function App() {
  const [usuario,setLogado] = useState(localStorage.getItem("usuario"));
  return usuario!=null?<RouteUser/>:<RouteLogin/>;
}

export default App;