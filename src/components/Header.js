import React from 'react'

import {Link} from "react-router-dom"

const Header = () => {
    return (
        <div className="Header">
            <h2>MY SHOPPING SITE</h2>
            <nav className="nav-bar">
                <Link to="/">
                    <div className="nav-link">Home Page</div>
                </Link>
                <Link to="/shoppingpage">
                    <div className="nav-link">Shopping Page</div>
                </Link>
                <Link to="">
                    <div className="nav-link">C</div>   
                </Link>
            </nav>
        </div>
    )
}

export default Header
