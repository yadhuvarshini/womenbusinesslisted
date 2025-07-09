import React, { useState } from 'react';
import reactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p className='text-bold underline'>Hello !</p>
      </div>
    </>
  )
}
 
export default App
