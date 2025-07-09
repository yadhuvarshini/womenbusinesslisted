import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';

import './index.css'
import App from './App.jsx'
import Signup from './pages/signup.jsx'
import Login from './pages/login.jsx'
import Homepage from './pages/homepage.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/api/signup" element={<Signup />} />
    <Route path="/api/login" element={<Login />} />
    {/* <Route path="/homepage" element={<Homepage />} /> */}
    <Route path="*" element={<h1>404 Not Found</h1>} /> 
  </Routes>
  </BrowserRouter>
)
