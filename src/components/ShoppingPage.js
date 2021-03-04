import React, { useState, useEffect } from 'react'
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
            <SideBar collection={collection}/>
            <ProductList collection={collection}/>
        </div>
    )
}

const SideBar = ({ collection }) => {
    const [colourScheme, setColourSheme] = useState(collection)

    useEffect(() => {
        setColourSheme(collection)
    }, [collection])

    const backgroundFromScheme = () => {
        if(colourScheme === "red") return "rgba(168, 14, 14, 0.75)"
        else if(colourScheme === "bandw") return "rgba(97, 92, 92, 0.75)"
        else if(colourScheme === "brown") return "rgba(199, 139, 11, 0.75)"
    }

    const handleMouseOver = (colour) => {
        setColourSheme(colour)
    }

    return (
        <nav className="side-bar" style={{ background: backgroundFromScheme() }}>
            <h3>Collections</h3>
            <Link to="/shoppingpage/red" className="side-link side-red">
                <p className="side-text text-red" onMouseOver={() => handleMouseOver("red")}>Red Collection</p>
            </Link>
            <Link to="/shoppingpage/bandw" className="side-link side-bandw">
                <p className="side-text text-bandw" onMouseOver={() => handleMouseOver("bandw")}>Black & White Collection</p>
            </Link>
            <Link to="/shoppingpage/brown" className="side-link side-brown">
                <p className="side-text text-brown" onMouseOver={() => handleMouseOver("brown")}>Brown Collection</p>
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
