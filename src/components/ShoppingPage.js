import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const items = {
    red: [
        {
            name: "cat", 
            desc: "Meow meow",
            price: 20    
        },
        {
            name: "cow", 
            desc: "Moo moo",
            price: 30    
        },
    ],
    bandw: [
        {
            name: "beetle", 
            desc: "Scuttle scuttle",
            price: 50    
        }
    ],
    brown: [
        {
            name: "duck", 
            desc: "Quack quack",
            price: 10    
        },
    ]
}

const ShoppingPage = () => {
    const { collection } = useParams()

    return (
        <div className="ShoppingPage">
            <SideBar/>
            <ProductList collection={collection}/>
        </div>
    )
}

const SideBar = ({ handleChange }) => {
    return (
        <nav className="side-bar">
            <Link to="/shoppingpage/red">
                <h3 className="nav-link">Red Collection</h3>
            </Link>
            <Link to="/shoppingpage/bandw">
                <h3 className="nav-link">Black & White Collection</h3>
            </Link>
            <Link to="/shoppingpage/brown">
                <h3 className="nav-link">Brown Collection</h3>
            </Link>
        </nav>
    )
}

const ProductList = ({ collection }) => {
    return (
        <div className="product-list">
            {items[collection].map((item, idx) => {
                return (
                    <div className="item" key={idx}>
                        <div className="item-name">{item.name}</div>
                        <div className="item-desc">{item.desc}</div>
                        <div className="item-price">{item.price}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default ShoppingPage
