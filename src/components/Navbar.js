import React from 'react';
import '../index.css'
import { Link, useLocation } from "react-router-dom";


function Navbar() {
    return (
        <>
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Bishank Bohara</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/"> Home</Link></li>
                            <li><a href="/about">About</a></li>
                            <li> <Link to="/projects"> Projects</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar