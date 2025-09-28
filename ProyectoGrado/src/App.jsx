import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

import './App.css'

import Inicio from './componentes/inicio/inicio.jsx'

function App() {
  return (
    <>
    <Router>
      <nav>
        <Link to="/">Inicio</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
