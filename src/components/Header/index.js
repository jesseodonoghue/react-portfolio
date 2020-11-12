import React from 'react';
import './style.css';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <header>
      <nav className="navbar navbar-fade navbar-expand-lg navbar-dark bg-dark">
        <span className="navbar-brand navbar-first mb-1">Jesse <span className="navbar-last">O'Donoghue</span></span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Items */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item">
            <a className="nav-link" href="index.html"><i className="fa fa-user-o" aria-hidden="true"></i>  About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="portfolio.html"><i className="fa fa-folder-open-o" aria-hidden="true"></i> Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="%PUBLIC_URL%/resume/ODonoghue_Resume.pdf" download><i className="fa fa-file-text-o" aria-hidden="true"></i> My Résumé</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="fa fa-envelope-open-o" aria-hidden="true"></i> Contact</a>
          </li>
        </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header;