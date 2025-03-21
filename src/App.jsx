import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import "./Styles/App.css";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import WomenInTech from "./Pages/WomenInTech";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/womenintech" element={<WomenInTech />} />
      </Routes>
    </>
  )
}

export default App
