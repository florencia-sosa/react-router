import React from 'react'
import {
    Link
} from "react-router-dom";

const Header = () =>{
    return(
        <div>
<nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">Navbar</a>
                    <button className="btn btn-outline-success" type="submit">
                        <Link to="/">Usuarios</Link>
                    </button>
                </div>
            </nav> 
        </div>
    )
}

export default Header