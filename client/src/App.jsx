//import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Sign from './pages/SignOut';
import Header from './components/Header';
//import { useNavigate } from 'react-router-dom';
import './App.css';
import React from 'react';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signout" element={<Sign />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
