import React, { useState } from 'react'
import inventory from "./inventory"

const ItemPage = ({onAddBasket, match: {params}}) => {
    const collection = params.collection
    const id = parseInt(params.id)

    const item = inventory[collection].find(item => item.id === id)

    const handleAddBasket = (item) => { onAddBasket(item) } 

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
            <img className="product-display-image" src={item.image}></img>
        </div>  
    )
}

const BuyBar = ({ item, collection, onAddBasket }) => {
    const [quantity, setQuantity] = useState(1)

    const handleInputChange = (value) => { if(Number(value) > 0) setQuantity(Number(value)) }

    const handleDecrement = () => { if(quantity > 1) setQuantity(quantity - 1) }

    const handleIncrement = () => { 
        //TODO: If (quantity < item.stock)
        setQuantity(quantity + 1)
    }

    const handleAddBasket = (item) => { onAddBasket(item) }

    const addClassFromCollection = () => { return `buy-bar-button-${collection}` }

    return (
        <div className="buy-bar-container">
            <div className="buy-bar-text-container">
                <h3 className="buy-bar-text-header">{item.name}</h3>
                <div className="buy-bar-text-body">
                    {item.desc}
                </div>  
            </div>
            <div className="buy-bar-price-container">
                <div className="buy-bar-price">
                    £{item.price}
                </div>
            </div>
            <div className="buy-bar-button-container">
                <div className="buy-bar-incrementer">
                    <div className="buy-bar-incrementer-subtract noSelect" onClick={handleDecrement}>
                        -
                    </div>
                    <input type="number" className="buy-bar-incrementor-input" value={quantity} onChange={(e) => handleInputChange(e.target.value)}></input>
                    <div className="buy-bar-incrementer-add noSelect" onClick={handleIncrement}>
                        +
                    </div>
                </div>
                <div 
                    className={`buy-bar-button ${addClassFromCollection()}`} 
                    onClick={() => handleAddBasket(item)}
                >
                    Add To Basket
                </div>
            </div>
        </div>
    )
}

export default ItemPage
