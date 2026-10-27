import './App.css'
import React, {useState} from 'react'
import {Route,Routes} from 'react-router-dom';
import Login from '../src/pages/Login.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Newnote from './pages/Newnote.jsx';

function App() {
  
  return (<>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/newnote" element={<Newnote/>}/>
      </Routes>
    
  </>)
}

export default App;

