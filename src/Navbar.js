import React from 'react'

function Navbar() {
    return (
        <div className="nav-bar">
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/">Logo</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ml-auto">
                <a className="nav-link" href="#top">HOME</a>
                <a className="nav-link" href="#about">ABOUT ME</a>
                <a className="nav-link" href="#resume">WORK & EDUCATION</a>
                <a className="nav-link" href="#services">SERVICES</a>
                <a className="nav-link" href="#projects">PROJECTS</a>
                <a className="nav-link" href="#contact">CONTACT</a>
              </div>
            </div>
          </nav>
          </div>
    )
}

export default Navbar
