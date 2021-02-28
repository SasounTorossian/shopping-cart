import React, { useState } from 'react'

const items = {
    mammals: [
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
    invertabrates: [
        {
            name: "beetle", 
            desc: "Scuttle scuttle",
            price: 50    
        }
    ],
    birds: [
        {
            name: "duck", 
            desc: "Quack quack",
            price: 10    
        },
    ]
}

const ShoppingPage = () => {
    const [productRange, setProductRange] = useState("mammals")

    const handleChange = (type) => {
        setProductRange(type)
    }

    return (
        <div className="ShoppingPage">
            <SideBar handleChange={handleChange}/>
            <ProductList productRange={productRange}/>
        </div>
    )
}

const SideBar = ({ handleChange }) => {
    return (
        <nav className="side-bar">
            <div onClick={() => handleChange("mammals")}>Mammals</div>
            <div onClick={() => handleChange("birds")}>Birds</div>
            <div onClick={() => handleChange("invertabrates")}>Invertabrates</div>
        </nav>
    )
}

const ProductList = ({ productRange }) => {
    return (
        <div className="product-list">
            {items[productRange].map((item, idx) => {
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
