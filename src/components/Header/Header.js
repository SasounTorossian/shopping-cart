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
                <NavLink 
                    to="/" 
                    exact={true} 
                    className="nav-link"
                    activeClassName="nav-bar-active"
                >
                    <div className="normal-container">
                        <h3 className="nav-text">Home</h3>
                    </div>
                </NavLink>
                <NavLink 
                    to="/shoppingpage/red" 
                    className="nav-link"
                    isActive={() => ["/shoppingpage/red", "/shoppingpage/grey", "/shoppingpage/gold"].includes(location.pathname)}
                    activeClassName="nav-bar-active"
                >
                    <div className="normal-container">
                        <h3 className="nav-text">Shopping</h3>
                    </div>
                </NavLink>
                <NavLink to={{
                    pathname: "/search",
                    state: { previous: location, position: elDistanceToRight},
                }}
                style={{pointerEvents: location.pathname === "/search" ? "none" : null}}
                className="nav-bar-search nav-link"
                activeClassName="nav-bar-active"
                >
                    <div className="normal-container">
                        <h3 className="nav-text">Search</h3>   
                    </div>
                </NavLink>
                <NavLink 
                    to="/basket" 
                    className="nav-link"
                    activeClassName="nav-bar-active"
                >
                    <div className="basket-container">
                        <h3 className="nav-text">Basket</h3>   
                        <div className={`basket-number ${isBasketEmpty()}`}>{basketSize}</div>
                    </div>
                </NavLink>
                <a 
                    href="https://github.com/SasounTorossian" 
                    target="_blank"
                    rel="noreferrer"
                    className="nav-link"
                >
                    <div className="normal-container">
                        <FontAwesomeIcon icon={faGithub} size="2x" className="nav-text"/>
                    </div>
                </a>
            </nav>
        </div>
    )
}

export default Header
