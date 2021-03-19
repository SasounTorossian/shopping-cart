import './Header.css';
import React, { useEffect } from 'react'
import { NavLink, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

// Header component that holds logo and quick links.
const Header = ({ basket }) => {
    // Element to get distance of right border of "search" tab in header.
    // Will be used to correctly align the search bar when opened.
    const el = document.querySelector(".nav-bar-search")
    let elDistanceToRight
    if(el) { elDistanceToRight = window.innerWidth - el.getBoundingClientRect().right }

    const location = useLocation()
    // Calculates basket size based on "quantity" variable in basket array.
    const basketSize = basket.reduce((a, b) => a + b.quantity, 0);

    // Used to hide or display the basket counter in the header.
    const isBasketEmpty = () => { if (basketSize === 0) return "header-basket-empty"}

    return (
        <div className="Header">
            <h1 className="nav-title">The Collection</h1>
            <nav className="nav-bar">
                <NavLink to="/" exact={true} activeClassName="nav-bar-active">
                    <h3 className="nav-link">Home</h3>
                </NavLink>
                <NavLink to="/shoppingpage/red" activeClassName="nav-bar-active">
                    <h3 className="nav-link">Shopping</h3>
                </NavLink>
                <NavLink to={{
                    pathname: "/search",
                    state: { previous: location, position: elDistanceToRight},
                }}
                style={{pointerEvents: location.pathname === "/search" ? "none" : null}}
                activeClassName="nav-bar-active"
                className="nav-bar-search"
                >
                    <h3 className="nav-link">Search</h3>   
                </NavLink>
                <NavLink to="/basket" activeClassName="nav-bar-active">
                    <div className="basket-container">
                        <h3 className="nav-link">Basket</h3>   
                        <div className={`basket-number ${isBasketEmpty()}`}>{basketSize}</div>
                    </div>
                </NavLink>
                <a 
                    href="https://github.com/SasounTorossian" 
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} size="2x" className="nav-link git-link"/>
                </a>
            </nav>
        </div>
    )
}

export default Header
