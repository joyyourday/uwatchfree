import React from 'react'

const Navbar = () => {
  return (
  
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Movie World</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="nav nav-pills">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="Hollywood">Hollywood</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="Bollywood">Bollywood</a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="Adult">Adult</a>
      </li>
    </ul>  
      </div>
    </div>
  </nav>
 
  );
}

export default Navbar;
