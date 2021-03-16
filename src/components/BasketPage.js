import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const BasketPage = ({ basket, deleteBasket }) => {
    return (
        <div className="BasketPage">
            <BasketItems basket={basket} deleteBasket={deleteBasket}/>
            <BasketCheckout basket={basket}/>
        </div>
    )
}

const BasketItems = ({ basket, deleteBasket }) => {
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
                        <div className="basket-item-delete" onClick={() => deleteBasket(itemQ)}>
                            <FontAwesomeIcon icon={faTrash} size="lg" className="nav-link git-link"/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const BasketCheckout = ({ basket }) => {
    const disableCheckout = () => {
        if (basket.length === 0 || 
            basket === undefined ||
            basket === null) {
                return "basket-checkout-disable"
        }
    }

    return (
        <div className={`basket-checkout ${disableCheckout()}`}>
            <Link to="" className="basket-checkout-link">
                <p className="basket-checkout-button">Checkout</p>
            </Link>
        </div>
    )
}

export default BasketPage
