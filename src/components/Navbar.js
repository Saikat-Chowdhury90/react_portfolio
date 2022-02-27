import React, { useEffect } from 'react'
import '../styles/nav.css';
import { Link,useNavigate,useLocation } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
  let location = useLocation();
  useEffect(() => {
    console.log(location)
  },[location]);
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">$OUM¥@</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav lists">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/" ? "active" : ""}`} aria-current="page" to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/Skills" ? "active" : ""}`}  to="/Skills">SKILLS</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/Blog" ? "active" : ""}`} to="/Blog">BLOGS</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/Contact" ? "active" : ""}`} to="/Contact">CONTACT ME</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar