import React from "react";
import {Routes,Route,Link} from 'react-router';
import Login from './pages/Login';
import Register from "./pages/Register";
import Mainlayouts from "./Layouts/Mainlayouts";
import Notes from "./Pages/Notes";
import AI_Assistant from "./Pages/AI_Assistand";
import Dashboard from "./Pages/Dashboard";
import Search from "./Pages/Search";

export default function App() {
  return (
    <>
    <Routes>
      <Route classname="" element={<Mainlayouts/>}>  
      <Route path="/assistant" element={<AI_Assistant/>}></Route>
      <Route path="/notes" element={<Notes/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/search" element={<Search/>}></Route>
      </Route>

      <Route path="/" element={<Login/>}></Route>
      <Route path="/Register" element={<Register/>}></Route>
    </Routes>
    </>
  )
}

