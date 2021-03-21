import './App.css';
import React, { useState } from 'react'
import { Switch, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Header from "./components/Header/Header"
import HomePage from "./components/HomePage/HomePage"
import ShoppingPage from "./components/ShoppingPage/ShoppingPage"
import ItemPage from "./components/ItemPage/ItemPage"
import BasketPage from "./components/BasketPage/BasketPage"
import SearchModal from "./components/SearchModal/SearchModal"
import inventory from "./components/inventory"

// Main App container that renders all components
function App() {
  const [basket, setBasket] = useState([])
  const location = useLocation()

  const previous = location.state && location.state.previous
  
  /*  Handles adding items to basket based on quantity. 
   *  Will create new object if item doesn't exist,
   *  or increment item by quantity if it already exists in basket. 
   *  Reduces inventory stock by quantity too.
   */
  const handleAddBasket = (item, quantity) => {
    inventory.find(inventoryItem => inventoryItem.id === item.id).stock -= quantity

    const newBasket = [...basket]
    let newItem = newBasket.find(basketItem => basketItem.item.id === item.id)

    if(newItem === undefined) {
      newItem = { item: item, quantity: quantity }
      setBasket([...newBasket, newItem]) 
    }
    else {
      newItem.quantity += quantity
      setBasket(newBasket) 
    } 
  }

  /** Handles deletion of basket item and places it back into stock.
   * 
   */
  const deleteBasket = (itemQ) => {
    setBasket(basket.filter(basketItem => basketItem.item.id !== itemQ.item.id))
    inventory.find(inventoryItem => inventoryItem.id === itemQ.item.id).stock += itemQ.quantity
  }

  //TODO: Move styling into css file
  return (
    <div className="App" style={{ overflowY: location.pathname === "/" ? "scroll" : "hidden"}}>
        <Header basket={basket} />
        <AnimatePresence >
          <Switch location={previous || location}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shoppingpage/:collection" component={ShoppingPage} />
            <Route 
              exact path="/shoppingpage/:collection/:id" 
              render={(props) => (
                <ItemPage {...props} onAddBasket={handleAddBasket} />
              )}
            />
            <Route 
              exact path="/basket" 
              render={(props) => (
                <BasketPage {...props} basket={basket} deleteBasket={deleteBasket}/>
                )}
                />
          </Switch>
        </AnimatePresence>
        {previous &&           
          <Route 
              exact path="/search" 
              render={(props) => (
                <SearchModal {...props} position={location.state.position}/>
                )}
          />
        }
    </div>
  );
}

export default App;
