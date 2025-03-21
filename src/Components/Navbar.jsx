import React from 'react'
import { Link, useLocation } from "react-router-dom";
import "../Styles/Navbar.css";

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