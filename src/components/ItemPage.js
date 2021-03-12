import React, { useState } from 'react'
import inventory from "./inventory"

const ItemPage = ({onAddBasket, match: {params}}) => {
    const collection = params.collection
    const id = parseInt(params.id)

    const item = inventory.find(item => item.id === id)

    const handleAddBasket = (item, quantity) => { onAddBasket(item, quantity) } 

    return (
        <div className="ItemPage">
            <ProductDisplay item={item} />
            <BuyBar item={item} collection={collection} onAddBasket={handleAddBasket}/>
        </div>
    )
}

const ProductDisplay = ({ item }) => {
    return (
        <div className="product-display-container">
            <img className="product-display-image" src={item.image} alt=""></img>
        </div>  
    )
}

const BuyBar = ({ item, collection, onAddBasket }) => {
    const [quantity, setQuantity] = useState(1)

    const handleInputChange = (value) => { if(Number(value) > 0) setQuantity(Number(value)) }

    const handleDecrement = () => { if(quantity > 1) setQuantity(quantity - 1) }

    const disableDecrement = () => { if(quantity <= 1) return "buy-bar-quantity-disable"}

    const handleIncrement = () => { if(quantity < item.stock) setQuantity(quantity + 1) }

    const disableIncrement = () => { if(quantity === item.stock || item.stock === 0) return "buy-bar-quantity-disable"}

    const handleAddBasket = (item) => { onAddBasket(item, quantity) }

    const disableAddBasket = () => {if(item.stock <= 0) return "buy-bar-button-disable"}

    const disableAddBasketContent = () => {return item.stock <= 0 ? "Out of Stock" : "Add to Basket"}

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
                        className={`buy-bar-quantity-increment noSelect ${disableDecrement()}`} 
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
                        className={`buy-bar-quantity-decrement noSelect ${disableIncrement()}`} 
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
