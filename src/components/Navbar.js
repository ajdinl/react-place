import React from 'react'

const Navbar = () => {
  return (
    <nav className='nav-wrapper blue darken-3'>
      <div className='container'>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/gallery'>Gallery</a></li>
          <li><a href='/about'>About</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar