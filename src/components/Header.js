import React from 'react'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

// Header component that holds logo and quick links.
const Header = ({ basket }) => {
    // Calculates basket size based on "quantity" variable in basket array.
    const basketSize = basket.reduce((a, b) => a + b.quantity, 0);

    // Used to hide or display the basket counter in the header.
    const isBasketEmpty = () => { if (basketSize === 0) return "header-basket-empty"}

    return (
        <div className="Header">
            <h1 className="nav-title">The Collection</h1>
            <nav className="nav-bar">
                <Link to="/">
                    <h3 className="nav-link">Home</h3>
                </Link>
                <Link to="/shoppingpage/red">
                    <h3 className="nav-link">Shopping</h3>
                </Link>
                <Link to="">
                    <h3 className="nav-link">Search</h3>   
                </Link>
                <Link to="/basket">
                    <div className="basket-container">
                        <h3 className="nav-link">Basket</h3>   
                        <div className={`basket-number ${isBasketEmpty()}`}>{basketSize}</div>
                    </div>
                </Link>
                <Link to="">
                    <FontAwesomeIcon icon={faGithub} size="2x" className="nav-link git-link"/>
                </Link>
            </nav>
        </div>
    )
}

export default Header
