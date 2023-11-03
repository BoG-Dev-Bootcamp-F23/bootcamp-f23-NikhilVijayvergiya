import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { useState } from 'react';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return <>
    <BrowserRouter>
    <Routes>
      <Route index element = {<Home loggedIn = {loggedIn} />} />
      <Route path = "Login"
      element = {<Login loggedIN = {loggedIn} setLoggedIn={ {setLoggedIn} } />}
      />
    </Routes>
    </BrowserRouter>
  
  </>;
  
}

export default App;
