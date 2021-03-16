import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const BasketPage = ({ basket, deleteBasket }) => {
    const emptyBasket = () => { return !basket.length && Array.isArray(basket) ? true : false }

    return (
        <div className="BasketPage">
            {emptyBasket()
            ? <InvalidBasket />
            : <ValidBasket basket={basket} deleteBasket={deleteBasket}/> 
            }
        </div>
    )
}

const InvalidBasket = () => {
    return (
        <p className="basket-empty">
            We wouldn't want you to leave empty-handed.
        </p>
    )
}

const ValidBasket = ({ basket, deleteBasket }) => {
    return (
        <React.Fragment>
            <BasketItems basket={basket} deleteBasket={deleteBasket}/>
            <BasketCheckout />
        </React.Fragment>
    )
}

const BasketItems = ({ basket, deleteBasket }) => {
    return (
        <div className="basket-items">
            {basket.map((basketItem, idx) => {
                return (
                    <div className="basket-item" key={idx}>
                        <div className="basket-item-info">
                            <div className="basket-item-image-container">
                                <img className="basket-item-image" src={basketItem.item.image} alt=""></img>
                            </div>
                            <div className="basket-item-name">
                                {basketItem.item.name}
                            </div>
                            <div className="basket-item-quantity">
                                {basketItem.quantity}
                            </div>
                        </div>
                        <div className="basket-item-delete" onClick={() => deleteBasket(basketItem)}>
                            <FontAwesomeIcon icon={faTrash} size="lg" className="nav-link git-link"/>
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
