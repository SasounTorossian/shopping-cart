import './Header.css';
import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

// Header component that holds logo and quick links.
const Header = ({ basket }) => {
    // State holds on to distance of right side of search tab to right side of screen.
    // Used to align the search bar that descends in the modal.
    const [rightBorderDistance, setRightBorderDistance] = useState(0)

    // textInput must be declared here so the ref can refer to it
    const searchInput = useRef(null);

    // When element loads, get the right border distance and set state.
    useEffect(() => {
        const element = searchInput.current
        if(element) setRightBorderDistance(window.innerWidth - element.getBoundingClientRect().right)  
    })

    
    // if(el) { elDistanceToRight =  }

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
                    state: { previous: location, position: rightBorderDistance},
                    }}
                    className="nav-bar-search nav-link"
                    activeClassName="nav-bar-active"
                    ref={searchInput}
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
