import React from 'react';
import { Link, NavLink } from 'react-router-dom';
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="/" style = {{"padding-left":"50px"}}>React User</a >
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" exact to="/">Home </NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" exact to="/about">About </NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
                        </li>


                    </ul>
                    <Link type="button" class="btn btn-outline-light" to="/users/add" style={{ marginLeft: 795 }}>Add User</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
