import React from 'react'

// Make Home appear conditionally on the navbar

const Navbar = () => {
  return (
    <nav>
      <ul class="navbar">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/womenintech">Women in Tech</a></li>
        <li><a href="/#contact">Contact</a></li>
      </ul>
    </nav>

  )
}

export default Navbar