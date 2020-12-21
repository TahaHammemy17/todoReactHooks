import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import Logout from '../logout';
import Login from '../login';

const navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Todo</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/todos">Todos</NavLink>
                    </li>
                    
                    {localStorage.getItem('email') ? <li className="nav-item">
                        <NavLink className="nav-link" to="/logout">Logout</NavLink>
                    </li> : "" }

                </ul>
            </div>
        </nav>
    );
};

export default navbar;
