import React from 'react'
import { Link } from 'react-router-dom'

const BasketPage = ({ basket }) => {
    console.log(basket);

    return (
        <div className="BasketPage">
            <BasketItems basket={basket}/>
            <BasketCheckout />
        </div>
    )
}

const BasketItems = ({ basket }) => {
    return (
        <div className="basket-items">
            {basket.map((itemQ, idx) => {
                return (
                    <div className="basket-item" key={idx}>
                        <div className="basket-item-info">
                            <div className="basket-item-image-container">
                                <img className="basket-item-image" src={itemQ.item.image} alt=""></img>
                            </div>
                            <div className="basket-item-name">
                                {itemQ.item.name}
                            </div>
                            <div className="basket-item-quantity">
                                {itemQ.quantity}
                            </div>
                        </div>
                        <div className="basket-item-delete">
                            X
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const BasketCheckout = () => {
    return (
        <div className="basket-checkout">
            <Link to="" className="basket-checkout-link">
                <p className="basket-checkout-button">Checkout</p>
            </Link>
        </div>
    )
}

export default BasketPage
