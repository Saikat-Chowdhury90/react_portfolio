import React from 'react'
import '../styles/nav.css';

const Navbar = () => {

  
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">SOUMYA</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav lists  ">
        <li className="nav-item ">
          <a className='nav-link' href="/">Home</a>
        </li>
        <li className="nav-item">
        <a className='nav-link' href="#about">About</a>
        </li>
        <li className="nav-item">
        <a className='nav-link' href="#skill">Skills</a>
        </li>
        
        <li className="nav-item">
        <a className='nav-link' href="#contact">Contact</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar