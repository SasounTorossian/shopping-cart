import './BasketPage.css';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

// basket component that gives overview to user of current basket contents.
const BasketPage = ({ basket, deleteBasket }) => {
    // Check if basket is empty.
    const isBasketEmpty = () => { return !basket.length && Array.isArray(basket) ? true : false }

    // Use conditional rendering to render either invalid or valid basket based on basket condition.
    return (
        <div className="BasketPage">
            {isBasketEmpty()
            ? <InvalidBasket />
            : <ValidBasket basket={basket} deleteBasket={deleteBasket}/> 
            }
        </div>
    )
}

// Component for empty basket. Display message.
const InvalidBasket = () => {
    return (
        <p className="basket-empty">
            We wouldn't want you to leave empty-handed.
        </p>
    )
}

// Component for non-empty basket. Display BasketItem and BasketCheckout components.
const ValidBasket = ({ basket, deleteBasket }) => {
    return (
        <React.Fragment>
            <BasketItems basket={basket} deleteBasket={deleteBasket}/>
            <BasketCheckout />
        </React.Fragment>
    )
}

// Component for displaying all items in basket.
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

// Component for rendering the checkout button at the end of the item list.
const BasketCheckout = () => {
    return (
        <div className="basket-checkout">
            <a 
                href="https://github.com/SasounTorossian" 
                target="_blank" 
                rel="noreferrer" 
                className="basket-checkout-link"
            >
                <p className="basket-checkout-button">Checkout</p>
            </a>
        </div>
    )
}

export default BasketPage
