import React from 'react'
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
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
            <h1 className="footer-section-title">Contact Us</h1>
            <form>
                <div className="first-row">
                    <div className="form-name form-component">
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text"></input>
                    </div>
                    <div className="form-phone form-component">
                        <label htmlFor="phone">Phone</label>
                        <input id="phone" type="text"></input>
                    </div>
                </div>
                <div className="second-row">
                    <div className="form-email form-component">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email"></input>
                    </div>
                </div>
                <div className="third-row">
                    <div className="form-comment form-component">
                        <label htmlFor="comment">Comment</label>
                        <textarea id="comment" type="text" rows="5"></textarea>
                    </div>
                </div>
                <div className="fourth-row">
                    <input type="submit" value="Submit"></input>
                </div>
            </form>
        </div>
    )
}

const Sitemap = () => {
    return (
        <div className="sitemap">
            <h1 className="footer-section-title">Sitemap</h1>
            <Link to="/" className="footer-link">
                <h3>Home</h3>
            </Link>
            <Link to="/shoppingpage" className="footer-link">
                <h3>Shopping</h3>
            </Link>
            <Link to="/basket" className="footer-link">
                <h3>Basket</h3>   
            </Link>
        </div>
    )
}

const Details = () => {
    return (
        <div className="details">
            <h1 className="footer-section-title">The Collection</h1>
            <a 
                href="https://github.com/SasounTorossian" 
                target="_blank" 
                rel="noreferrer"
                className="detail-link git-link"
            >
                <FontAwesomeIcon icon={faGithub} size ="2x"/>
                <h3>Git</h3>
            </a>
            <a 
                href="mailto:sasountorossian@gmail.com" 
                target="_blank" 
                className="detail-link email-link"
                rel="noreferrer"
            >
                <FontAwesomeIcon icon={faAt} size ="2x"/>
                <h3>sasountorossian@gmail.com</h3>
            </a>
        </div>
    )
}

export default Footer
