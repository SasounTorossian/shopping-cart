import React from 'react'
import inventory from "./inventory"

const ItemPage = (props) => {
    const { params } = props.match
    const collection = params.collection
    const id = parseInt(params.id)

    const item = inventory[collection].find(item => item.id === id)

    return (
        <div className="ItemPage">
            <ProductDisplay item={item} />
            <BuyBar item={item} collection={collection}/>
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

const BuyBar = ({ item, collection }) => {

    //TODO:  Use `${collection}-buy-button`

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
                <div className={`buy-bar-button ${addClassFromCollection()}`}>
                    Add To Basket
                </div>
            </div>
        </div>
    )
}

export default ItemPage
