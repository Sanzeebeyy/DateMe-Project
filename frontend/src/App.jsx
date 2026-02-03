import { useState } from 'react'
import LandingPage from './pages/landingPage'
import Register from './pages/registerPage'
import { Routes, Route } from 'react-router'
import './App.css'

function App() {
  return(
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        
        <Route path='/register' element={<Register/>}></Route>
        
      </Routes>
    </>
  )  
}

export default App
