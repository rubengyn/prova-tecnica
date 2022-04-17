import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <div>Cabeçario</div>
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/upload">Upload</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/readAll">Read ALL</Link></li>
      </ul>
    </div>
  )
}

export default Header