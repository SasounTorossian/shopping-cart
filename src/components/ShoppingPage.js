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

    // const backgroundImageFromCollection = () => {
    //     if(collection === "red") return `url(${rust})`
    //     else if(collection === "grey") return `url(${wallart})`
    //     else if(collection === "gold") return `url(${gold})`
    // }

    const backgroundFromCollection = () => {
        if(collection === "red") return "rgba(168, 14, 14, 0.75)"
        else if(collection === "grey") return "rgba(129, 123, 123, 0.75)" 
        else if(collection === "gold") return "rgba(199, 139, 11, 0.75)" 
    }

    const ifRed = () => { if(collection === "red") return "rgba(168, 14, 14, 1)" }

    const ifGrey = () => { if(collection === "grey") return "rgba(129, 123, 123, 1)" }

    const ifGold = () => { if(collection === "gold") return "rgba(199, 139, 11, 1)" }

    return (
        <nav className="side-bar" style={{ background: backgroundFromCollection() }}>
            <div className="side-link-container">
                <Link to="/shoppingpage/red" className="side-link side-red">
                    <p 
                        className="side-text text-red" 
                        style={{ background: ifRed() }}
                    >
                        Red Collection
                    </p>
                </Link>
                <Link to="/shoppingpage/grey" className="side-link side-grey">
                    <p 
                        className="side-text text-grey" 
                        style={{ background: ifGrey() }}
                    >
                            Grey Collection
                    </p>
                </Link>
                <Link to="/shoppingpage/gold" className="side-link side-gold">
                    <p 
                        className="side-text text-gold" 
                        style={{ background: ifGold() }}
                    >
                            Gold Collection
                    </p>
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
