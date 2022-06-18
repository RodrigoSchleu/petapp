import './App.css';

import * as React from 'react';
import { useState } from 'react';

import RouteLogin from './RouteLogin';
import RouteUser from './RouteUser';

function App() {
  const [logado, setLogado] = useState(true);
  return logado?<RouteUser/>:<RouteLogin/>;
}

export default App;