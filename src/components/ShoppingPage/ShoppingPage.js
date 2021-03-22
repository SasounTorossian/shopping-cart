import "./ShoppingPage.css"
import React from 'react'
import { useParams, Link, NavLink } from 'react-router-dom'
import { motion } from "framer-motion"
import inventory from "../inventory"

const PageVariants = {
    in: {
        opacity: 1
    },
    out: {
        opacity: 0 
    }
}

// Shopping page component which renders all the items on sale.
const ShoppingPage = () => {
    // Gets collection (e.g. red) from url as param.
    const { collection } = useParams()    

    return (
        <motion.div 
            className="ShoppingPage"
            variants={PageVariants}
            initial="out"
            animate="in"
            exit="out"
        >
            <SideBar collection={collection} />
            <ProductList collection={collection}/>
        </motion.div>
    )
}

// Sidebar component that allows user to switch between the different collections.
const SideBar = ({ collection }) => {
    // Changes background of sidebar based on current collection.
    const backgroundFromCollection = () => { return `side-bar-${collection}-active`}
    
    return (
        <nav className={`side-bar ${backgroundFromCollection()}`}>
            <div className="side-bar-link-container">
                <NavLink 
                    to="/shoppingpage/red" 
                    className="side-bar-link"
                    activeClassName="side-bar-link-red-active"
                >
                    <p className="side-bar-text side-bar-text-red">Red Collection</p>
                </NavLink>
                <NavLink 
                    to="/shoppingpage/grey" 
                    className="side-bar-link"
                    activeClassName="side-bar-link-grey-active"
                >
                    <p className="side-bar-text side-bar-text-grey">Grey Collection</p>
                </NavLink>
                <NavLink 
                    to="/shoppingpage/gold" 
                    className="side-bar-link"
                    activeClassName="side-bar-link-gold-active"
                >
                    <p className="side-bar-text side-bar-text-gold">Gold Collection</p>
                </NavLink>
                <NavLink 
                    to="/shoppingpage/green" 
                    className="side-bar-link"
                    activeClassName="side-bar-link-green-active"
                >
                    <p className="side-bar-text side-bar-text-green">Green Collection</p>
                </NavLink>
            </div>
        </nav>
    )
}

// Product list component that displays the items in a given collection
const ProductList = ({ collection }) => {
    return (
        <div className="product-list">
            {inventory.filter(item => item.collection === collection).map((item, idx) => {
                return (
                    <div className="item" key={idx}>
                        <Link to={`/shoppingpage/${collection}/${item.id}`} className="item-link">
                            <div className="item-padding-container">
                                <div className="item-image-container">
                                    <img className="item-image" src={item.image} alt=""></img>
                                </div>
                                <div className="item-name">{item.name}</div>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ShoppingPage
