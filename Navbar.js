import { useState } from 'react'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav>
      <div id='brand'>John Jane Doe</div>
      <div id="nav-menu">
        <span onClick={() => setShowMenu(!showMenu)} className="mobile-menu">
          Menu
        </span>
        <ul className={`${showMenu ? "active" : "hide"}`}>
          <li onClick={() => setShowMenu(false)}>
            <a href="#hero">Home</a>
          </li>
          <li onClick={() => setShowMenu(false)}>
            <a href="#projects">Work</a>
          </li>
          <li onClick={() => setShowMenu(false)}>
            <a href="#about">About</a>
          </li>
          <li onClick={() => setShowMenu(false)}>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <button className='cta-outline'><a href="https://www.upwork.com/" target="_blank" rel="noopener noreferrer">Hire Me</a></button>
          </li>
        </ul>
      </div>
      
    </nav>
   
  )
}

export default Navbar