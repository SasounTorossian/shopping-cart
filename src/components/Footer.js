import React from 'react'
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className="Footer">
            <ContactUs />
            <Sitemap />
            <Details />
        </div>
    )
}

const ContactUs = () => {
    return (
        <div className="contact-us">
            <h2>Contact Us</h2>
            <form>
                <label for="name">Name</label>
                <input id="name" type="text"></input>

                <label for="email">Email</label>
                <input id="email" type="email"></input>

                <label for="phone">Phone</label>
                <input id="phone" type="text"></input>

                <labal for="box">Please type here</labal>
                <textarea id="box" type="text"></textarea>
            </form>
        </div>
    )
}

const Sitemap = () => {
    return (
        <div className="sitemap">
            <h2>Sitemap</h2>
            <Link to="/" className="footer-link">
                <h4>Home</h4>
            </Link>
            <Link to="/shoppingpage" className="footer-link">
                <h4>Shopping</h4>
            </Link>
            <Link to="" className="footer-link">
                <h4>Search</h4>   
            </Link>
            <Link to="" className="footer-link">
                <h4>Basket</h4>   
            </Link>
        </div>
    )
}

const Details = () => {
    return (
        <div className="details">
            <h2>The Collection</h2>
            <Link to="" className="detail-link git-link">
                <FontAwesomeIcon icon={faGithub} size ="2x"/>
                <h3>Git</h3>
            </Link>
            <Link to="" className="detail-link fb-link">
                <FontAwesomeIcon icon={faFacebook} size ="2x" />
                <h3>Facebook</h3>
            </Link>
            <Link to="" className="detail-link email-link">
                <FontAwesomeIcon icon={faAt} size ="2x"/>
                <h3>Email</h3>
            </Link>
        </div>
    )
}

export default Footer
