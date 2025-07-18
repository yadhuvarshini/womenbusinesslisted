import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';

import './index.css'
import App from './App.jsx'
import Signup from './pages/signup.jsx'
import Login from './pages/login.jsx'
import Homepage from './pages/homepage.jsx'
import ProfilePage from './pages/profile.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/profile" element={<ProfilePage />} />
    
    {/* <Route path="/homepage" element={<Homepage />} /> */}
    <Route path="*" element={<h1>404 Not Found</h1>} /> 
  </Routes>
  </BrowserRouter>
)
