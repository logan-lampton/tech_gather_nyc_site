import React from 'react'
import { Link, useLocation } from "react-router-dom";

// Make Home appear conditionally on the navbar

const Navbar = () => {
  const location = useLocation();


  return (
    <nav class="navbar">
      {location.pathname !== "/" && <Link to="/">Home</Link>}
      <Link to="/about">About</Link>
      <Link to="/womenintech">Women in Tech</Link>
      <Link to="/#contact">Contact</Link>
    </nav>

  )
}

export default Navbar