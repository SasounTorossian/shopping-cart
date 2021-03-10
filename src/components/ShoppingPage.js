import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import rust from "../images/rust.jpg" 
import wallart from "../images/art.jpg" 
import gold from "../images/gold.jpg" 
import inventory from "./inventory"


const ShoppingPage = () => {
    const { collection } = useParams()    

    return (
        <div className="ShoppingPage">
            <SideBar collection={collection} />
            <ProductList collection={collection}/>
        </div>
    )
}

const SideBar = ({ collection }) => {
    const backgroundFromCollection = () => {
        if(collection === "red") return "side-bar-red-active"
        else if(collection === "grey") return "side-bar-grey-active" 
        else if(collection === "gold") return "side-bar-gold-active"
    }

    const ifRedCollection = () => { if(collection === "red") return "side-bar-link-red-active" }

    const ifGreyCollection = () => { if(collection === "grey") return "side-bar-link-grey-active" }

    const ifGoldCollection = () => { if(collection === "gold") return "side-bar-link-gold-active" }
    
    return (
        <nav className={`side-bar ${backgroundFromCollection()}`}>
            <div className="side-bar-link-container">
                <Link to="/shoppingpage/red" className={`side-bar-link ${ifRedCollection()}`}>
                    <p className="side-bar-text side-bar-text-red">Red Collection</p>
                </Link>
                <Link to="/shoppingpage/grey" className={`side-bar-link ${ifGreyCollection()}`}>
                    <p className="side-bar-text side-bar-text-grey">Grey Collection</p>
                </Link>
                <Link to="/shoppingpage/gold" className={`side-bar-link ${ifGoldCollection()}`}>
                    <p className="side-bar-text side-bar-text-gold">Gold Collection</p>
                </Link>
            </div>
        </nav>
    )
}

const ProductList = ({ collection }) => {
    return (
        <div className="product-list">
            {inventory[collection].map((item, idx) => {
                return (
                    <div className="item" key={idx}>
                        <Link to={`/shoppingpage/${collection}/${item.id}`} className="item-link">
                            <div className="item-padding-container">
                                <div className="item-image-container">
                                    <img className="item-image" src={item.image}></img>
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
