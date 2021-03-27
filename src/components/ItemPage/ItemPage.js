import "./ItemPage.css"
import React, { useState } from 'react'
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

// Item page component that displays individual item to user.
const ItemPage = ({onAddBasket, match: {params}}) => {
    // Get current collection which will determine "add to basket" button styling.
    const collection = params.collection

    // Get id of object to display.
    const id = parseInt(params.id)
    
    // Use id to get the correct item from inventory to display.
    const item = inventory.find(item => item.id === id)
    
    // Add basket handler passed from App.js
    const handleAddBasket = (item, quantity) => { onAddBasket(item, quantity) } 

    return (
        <motion.div 
            className="ItemPage"
            variants={PageVariants}
            initial="out"
            animate="in"
            exit="out"
        >
            <ProductDisplay item={item} />
            <BuyBar item={item} collection={collection} onAddBasket={handleAddBasket}/>
        </motion.div>
    )
}

// Component soley responsible for displaying item image.
const ProductDisplay = ({ item }) => {
    return (
        <div className="product-display-container">
            <img className="product-display-image" src={item.image} alt=""></img>
        </div>  
    )
}

// Buy bar component that displays item info, quantity selector, and "add to basket" button.
const BuyBar = ({ item, collection, onAddBasket }) => {
    // Set default quantity to 1
    const [quantity, setQuantity] = useState(1)

    // Handle direct changes to quantity input.
    const handleInputChange = (value) => { if(Number(value) > 0) setQuantity(Number(value)) }

    // Handle decrement button.
    const handleDecrement = () => { if(quantity > 1) setQuantity(quantity - 1) }

    // Disable decrement button if value is less that 1.
    const disableDecrement = () => { if(quantity <= 1) return "buy-bar-quantity-disable" }

    // Handle increment.
    const handleIncrement = () => { if(quantity < item.stock) setQuantity(quantity + 1) }

    // Disable increment if quantity is at stock level, or if stock is empty.
    const disableIncrement = () => { if(quantity === item.stock || item.stock === 0) return "buy-bar-quantity-disable" }

    // Add basket handler passed from ItemPage.
    const handleAddBasket = (item) => { onAddBasket(item, quantity) }

    // Disable add basket button if stock is empty.
    const disableAddBasket = () => { if(item.stock <= 0) return "buy-bar-button-disable" }

    // Change add basket text if stock is empty.
    const disableAddBasketContent = () => { return item.stock <= 0 ? "Out of Stock" : "Add to Basket" }

    // Change add basket button hover colour based on collection.
    const colourSchemeAddBasket = () => { return `buy-bar-button-${collection}` }

    return (
        <div className="buy-bar-container">
            <div className="buy-bar-text-container">
                <h3 className="buy-bar-text-header">{item.name}</h3>
                <div className="buy-bar-text-body">
                    {item.desc}
                </div>  
            </div>
            <div className="buy-bar-price-stock-container">
                <div className="buy-bar-price">
                    £{item.price}
                </div>
                <div className="buy-bar-stock">
                    In Stock: {item.stock}
                </div>
            </div>
            <div className="buy-bar-button-container">
                <div className="buy-bar-quantity">
                    <div 
                        className={`buy-bar-quantity-decrement noSelect ${disableDecrement()}`} 
                        onClick={handleDecrement}
                    >
                        -
                    </div>
                    <input 
                        type="number" 
                        className="buy-bar-quantity-input" 
                        value={quantity <= item.stock ? quantity : setQuantity(item.stock)} 
                        onChange={(e) => handleInputChange(e.target.value)}
                    >
                    </input>
                    <div 
                        className={`buy-bar-quantity-increment noSelect ${disableIncrement()}`} 
                        onClick={handleIncrement}
                    >
                        +
                    </div>
                </div>
                <div 
                    className={`buy-bar-button noSelect ${colourSchemeAddBasket()} ${disableAddBasket()}`} 
                    onClick={() => handleAddBasket(item)}
                >
                    {disableAddBasketContent()}
                </div>
            </div>
        </div>
    )
}

export default ItemPage
