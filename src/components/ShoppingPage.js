import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import image_1 from "../images/1.jpg" 
import image_2 from "../images/2.jpg" 
import image_3 from "../images/3.jpg" 
import image_4 from "../images/4.jpg" 
import image_5 from "../images/5.jpg" 
import rust from "../images/rust3.jpg" 
import wallart from "../images/wallart.jpg" 
import gold from "../images/gold_back.jpg" 

const items = {
    red: [
        {
            id: 1,
            image: image_1,
            name: "cat", 
            descShort: "Meow meow",
            desc: "Nisi nulla minim et reprehenderit qui irure cillum aute laborum. Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute duis dolor non id non. Mollit fugiat qui veniam non voluptate do. Et laboris ipsum nulla id anim quis voluptate. Qui excepteur elit sint aliquip exercitation nisi veniam Lorem laborum esse excepteur consequat et esse.",
            price: 20    
        },
        {
            id: 2,
            image: image_2,
            name: "cow", 
            descShort: "Moo moo",
            desc: "Nisi nulla minim et reprehenderit qui irure cillum aute laborum. Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute duis dolor non id non. Mollit fugiat qui veniam non voluptate do. Et laboris ipsum nulla id anim quis voluptate. Qui excepteur elit sint aliquip exercitation nisi veniam Lorem laborum esse excepteur consequat et esse.",
            price: 30    
        },
        {
            id: 3,
            image: image_3,
            name: "dog", 
            descShort: "bark bark",
            desc: "Nisi nulla minim et reprehenderit qui irure cillum aute laborum. Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute duis dolor non id non. Mollit fugiat qui veniam non voluptate do. Et laboris ipsum nulla id anim quis voluptate. Qui excepteur elit sint aliquip exercitation nisi veniam Lorem laborum esse excepteur consequat et esse.",
            price: 40    
        },
        {
            id: 4,
            image: image_4,
            name: "flamingo", 
            descShort: "? ?",
            desc: "Nisi nulla minim et reprehenderit qui irure cillum aute laborum. Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute duis dolor non id non. Mollit fugiat qui veniam non voluptate do. Et laboris ipsum nulla id anim quis voluptate. Qui excepteur elit sint aliquip exercitation nisi veniam Lorem laborum esse excepteur consequat et esse.",
            price: 40    
        },
        {
            id: 5,
            image: image_5,
            name: "whale", 
            descShort: "AAAAAAAAAA",
            desc: "Nisi nulla minim et reprehenderit qui irure cillum aute laborum. Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute duis dolor non id non. Mollit fugiat qui veniam non voluptate do. Et laboris ipsum nulla id anim quis voluptate. Qui excepteur elit sint aliquip exercitation nisi veniam Lorem laborum esse excepteur consequat et esse.",
            price: 40    
        },
    ],
    grey: [
        {
            id: 6,
            image: image_1,
            name: "beetle", 
            descShort: "Scuttle scuttle",
            desc: "Nisi nulla minim et reprehenderit qui irure cillum aute laborum. Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute duis dolor non id non. Mollit fugiat qui veniam non voluptate do. Et laboris ipsum nulla id anim quis voluptate. Qui excepteur elit sint aliquip exercitation nisi veniam Lorem laborum esse excepteur consequat et esse.",
            price: 50    
        }
    ],
    gold: [
        {
            id: 7,
            image: image_2,
            name: "duck", 
            descShort: "Quack quack",
            desc: "Nisi nulla minim et reprehenderit qui irure cillum aute laborum. Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute duis dolor non id non. Mollit fugiat qui veniam non voluptate do. Et laboris ipsum nulla id anim quis voluptate. Qui excepteur elit sint aliquip exercitation nisi veniam Lorem laborum esse excepteur consequat et esse.",
            price: 10    
        },
    ]
}

const ShoppingPage = () => {
    const { collection } = useParams()
    // const [colourScheme, setColourSheme] = useState(collection)

    // useEffect(() => {
    //     setColourSheme(collection)
    // }, [collection])

    // const backgroundImageFromScheme = () => {
    //     if(colourScheme === "red") return `url(${rust})`
    //     else if(colourScheme === "grey") return `url(${wallart})`
    //     else if(colourScheme === "gold") return `url(${gold})`
    // }

    // const handleMouseOverPage = (colour) => {
    //     setColourSheme(colour)
    // }

    // const handleMouseLeavePage = () => {
    //     setColourSheme(collection)
    // }
        

    return (
        <div className="ShoppingPage">
            <SideBar collection={collection} />
            <ProductList collection={collection}/>
        </div>
    )
}

const SideBar = ({ collection }) => {

    const backgroundImageFromCollection = () => {
        if(collection === "red") return `url(${rust})`
        else if(collection === "grey") return `url(${wallart})`
        else if(collection === "gold") return `url(${gold})`
    }

    const ifRed = () => { if(collection === "red") return "rgba(168, 14, 14, 1)" }

    const ifGrey = () => { if(collection === "grey") return "rgba(129, 123, 123, 1)" }

    const ifGold = () => { if(collection === "gold") return "rgba(199, 139, 11, 1)" }

    return (
        <nav className="side-bar" style={{ backgroundImage: backgroundImageFromCollection() }}>
            <h3>Collections</h3>
            <div className="side-link-container">
                <Link to="/shoppingpage/red" className="side-link side-red">
                    <p 
                        className="side-text text-red" 
                        // onMouseOver={() => handleMouseOver("red")}
                        // onMouseLeave={() => handleMouseLeave()}
                        style={{ background: ifRed() }}
                    >
                        Red Collection
                    </p>
                </Link>
                <Link to="/shoppingpage/grey" className="side-link side-grey">
                    <p 
                        className="side-text text-grey" 
                        // onMouseOver={() => handleMouseOver("grey")}
                        // onMouseLeave={() => handleMouseLeave()}
                        style={{ background: ifGrey() }}
                    >
                            Grey Collection
                    </p>
                </Link>
                <Link to="/shoppingpage/gold" className="side-link side-gold">
                    <p 
                        className="side-text text-gold" 
                        // onMouseOver={() => handleMouseOver("gold")}
                        // onMouseLeave={() => handleMouseLeave()}d
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
            {items[collection].map((item, idx) => {
                return (
                    <div className="item" key={idx}>
                        <div className="item-padding-container">
                            <img className="item-image" src={item.image}></img>
                            <div className="item-name">{item.name}</div>
                            <div className="item-descShort">{item.descShort}</div>
                        </div>
                        {/* <div className="item-price">{item.price}</div> */}
                    </div>
                )
            })}
        </div>
    )
}

export default ShoppingPage
