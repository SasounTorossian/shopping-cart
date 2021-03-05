import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const items = {
    red: [
        {
            id: 1,
            name: "cat", 
            desc: "Meow meow",
            price: 20    
        },
        {
            id: 2,
            name: "cow", 
            desc: "Moo moo",
            price: 30    
        },
        {
            id: 3,
            name: "dog", 
            desc: "bark bark",
            price: 40    
        },
        {
            id: 4,
            name: "flamingo", 
            desc: "? ?",
            price: 40    
        },
        {
            id: 5,
            name: "whale", 
            desc: "AAAAAAAAAA",
            price: 40    
        },
    ],
    grey: [
        {
            name: "beetle", 
            desc: "Scuttle scuttle",
            price: 50    
        }
    ],
    gold: [
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
        else if(colourScheme === "grey") return "rgba(129, 123, 123, 0.75)"
        else if(colourScheme === "gold") return "rgba(199, 139, 11, 0.75)"
    }

    const handleMouseOver = (colour) => {
        setColourSheme(colour)
    }

    const handleMouseLeave = () => {
        setColourSheme(collection)
    }

    return (
        <nav className="side-bar" style={{ background: backgroundFromScheme() }}>
            <h3>Collections</h3>
            <div className="side-link-container">
                <Link to="/shoppingpage/red" className="side-link side-red">
                    <p 
                        className="side-text text-red" 
                        onMouseOver={() => handleMouseOver("red")}
                        onMouseLeave={() => handleMouseLeave()}
                    >
                        Red Collection
                    </p>
                </Link>
                <Link to="/shoppingpage/grey" className="side-link side-grey">
                    <p 
                        className="side-text text-grey" 
                        onMouseOver={() => handleMouseOver("grey")}
                        onMouseLeave={() => handleMouseLeave()}
                    >
                            Grey Collection
                    </p>
                </Link>
                <Link to="/shoppingpage/gold" className="side-link side-gold">
                    <p 
                        className="side-text text-gold" 
                        onMouseOver={() => handleMouseOver("gold")}
                        onMouseLeave={() => handleMouseLeave()}
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
