import { useState } from 'react'
import Sidebar from './components/Sidebar/SIdebar'
import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Sidebar/>
          <Route path="/" element={<Home />} />

        </Routes>
        

      </BrowserRouter>

    </>

  )
}

export default App
