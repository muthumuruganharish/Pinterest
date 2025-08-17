import React from 'react'
import Home from './pages/Home'
import Login from "./pages/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login/>}/>

        </Routes>
        

      </BrowserRouter>

    </>

  )
}

export default App
