import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/home/Home';

const Main = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="about" element={} /> */}
      </Routes>
    </div>
  )
}

export default Main